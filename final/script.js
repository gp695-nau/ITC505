// Game configuration
const GRID_SIZE = 5;
const gameBoard = document.getElementById('game-board');
const resetBtn = document.getElementById('reset-btn');

// Initialize the game
function initGame() {
    // Clear the board
    gameBoard.innerHTML = '';
    
    // Create grid squares
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const light = document.createElement('div');
        light.classList.add('light', 'is-off');
        light.dataset.index = i;
        light.addEventListener('click', handleLightClick);
        gameBoard.appendChild(light);
    }
    
    // Create a solvable random configuration
    createRandomBoard();
}

// Handle light click
function handleLightClick(event) {
    const index = parseInt(event.target.dataset.index);
    toggleLight(index);
    
    // Toggle neighbors
    const neighbors = getNeighbors(index);
    neighbors.forEach(neighborIndex => {
        toggleLight(neighborIndex);
    });
    
    // Check for win after a short delay to allow animations
    setTimeout(checkWin, 100);
}

// Toggle a single light
function toggleLight(index) {
    const lights = document.querySelectorAll('.light');
    if (lights[index]) {
        lights[index].classList.toggle('is-off');
    }
}

// Get neighbor indices (up, down, left, right)
function getNeighbors(index) {
    const neighbors = [];
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;
    
    // Up
    if (row > 0) {
        neighbors.push(index - GRID_SIZE);
    }
    
    // Down
    if (row < GRID_SIZE - 1) {
        neighbors.push(index + GRID_SIZE);
    }
    
    // Left
    if (col > 0) {
        neighbors.push(index - 1);
    }
    
    // Right
    if (col < GRID_SIZE - 1) {
        neighbors.push(index + 1);
    }
    
    return neighbors;
}

// Create a random but solvable board
function createRandomBoard() {
    // Start with all lights off (solved state)
    // Then simulate random clicks to create a solvable puzzle
    const numMoves = Math.floor(Math.random() * 11) + 20; // 20-30 random moves
    
    for (let i = 0; i < numMoves; i++) {
        const randomIndex = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
        simulateClick(randomIndex);
    }
}

// Simulate a click without triggering win check
function simulateClick(index) {
    toggleLight(index);
    
    const neighbors = getNeighbors(index);
    neighbors.forEach(neighborIndex => {
        toggleLight(neighborIndex);
    });
}

// Check if player has won
function checkWin() {
    const lights = document.querySelectorAll('.light');
    const allOff = Array.from(lights).every(light => light.classList.contains('is-off'));
    
    if (allOff) {
        setTimeout(() => {
            window.alert('You win! 🎉 Congratulations!');
        }, 200);
    }
}

// Reset button handler
resetBtn.addEventListener('click', initGame);

// Start the game when page loads
initGame();