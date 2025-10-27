// Initial array to sort
const originalArray = [170, 45, 75, 90, 802, 24, 2, 66];
let currentArray = [...originalArray];
let isSorting = false;

// DOM element references
const sortButton = document.getElementById('sortButton');
const resetButton = document.getElementById('resetButton');
const visualization = document.getElementById('visualization');
const stepInfo = document.getElementById('stepInfo');
const result = document.getElementById('result');
const lastModified = document.getElementById('lastModified');

// Set last modified date
lastModified.textContent = new Date().toLocaleString();

/**
 * Creates visual bar representation of the array
 * @param {Array} arr - Array of numbers to visualize
 */
function createBars(arr) {
    visualization.innerHTML = '';
    const maxVal = Math.max(...arr);
    
    arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${(val / maxVal) * 250}px`;
        bar.innerHTML = `<span class="bar-value">${val}</span>`;
        bar.id = `bar-${idx}`;
        visualization.appendChild(bar);
    });
}

/**
 * Sleep function for animation delays
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Find maximum value in array
 * @param {Array} arr - Input array
 * @returns {number} Maximum value
 */
function getMax(arr) {
    return Math.max(...arr);
}

/**
 * Counting sort for a specific digit place
 * @param {Array} arr - Array to sort
 * @param {number} exp - Exponent for digit place (1, 10, 100, etc.)
 */
async function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Store count of occurrences
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so it contains actual position
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output array
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy output array to original array with animation
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
        const bars = document.querySelectorAll('.bar');
        bars[i].classList.add('comparing');
        await sleep(300);
        bars[i].classList.remove('comparing');
    }

    // Recreate bars after sorting this digit place
    createBars(arr);
    await sleep(500);
}

/**
 * Main Radix Sort algorithm
 * @param {Array} arr - Array to sort
 */
async function radixSort(arr) {
    const max = getMax(arr);
    let digitPlace = 1;

    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        stepInfo.textContent = `Sorting by digit place: ${digitPlace} (${exp}'s place)`;
        await countingSort(arr, exp);
        digitPlace++;
    }

    // Mark all bars as sorted
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.add('sorted'));
    
    stepInfo.textContent = '✅ Sorting complete!';
    result.innerHTML = `<strong>Sorted Array:</strong> [${arr.join(', ')}]`;
}

/**
 * Event listener for Sort button
 */
sortButton.addEventListener('click', async () => {
    if (isSorting) return;
    
    isSorting = true;
    sortButton.disabled = true;
    resetButton.disabled = true;
    
    result.innerHTML = '<strong>Status:</strong> Sorting in progress...';
    await radixSort(currentArray);
    
    sortButton.disabled = false;
    resetButton.disabled = false;
    isSorting = false;
});

/**
 * Event listener for Reset button
 */
resetButton.addEventListener('click', () => {
    if (isSorting) return;
    
    currentArray = [...originalArray];
    createBars(currentArray);
    stepInfo.textContent = 'Click "Start Sorting" to visualize the Radix Sort algorithm!';
    result.innerHTML = '<strong>Status:</strong> Ready to sort';
});

// Initialize visualization on page load
createBars(currentArray);