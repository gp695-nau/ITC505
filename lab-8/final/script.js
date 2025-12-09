// Game configuration
let GRID_SIZE = 3;
const gameBoard = document.getElementById('game-board');
const resetBtn = document.getElementById('reset-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Difficulty button handlers
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        difficultyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        GRID_SIZE = parseInt(btn.dataset.size);
        gameBoard.className = `game-board size-${GRID_SIZE}`;
        initGame();
    });
});

// Initialize the game
function initGame() {
    gameBoard.innerHTML = '';
    
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const light = document.createElement('div');
        light.classList.add('light', 'is-off');
        light.dataset.index = i;
        light.addEventListener('click', handleLightClick);
        gameBoard.appendChild(light);
    }
    
    createRandomBoard();
}

// Handle light click
function handleLightClick(event) {
    const index = parseInt(event.target.dataset.index);
    toggleLight(index);
    
    const neighbors = getNeighbors(index);
    neighbors.forEach(neighborIndex => {
        toggleLight(neighborIndex);
    });
    
    setTimeout(checkWin, 100);
}

// Toggle a single light
function toggleLight(index) {
    const lights = document.querySelectorAll('.light');
    if (lights[index]) {
        lights[index].classList.toggle('is-off');
    }
}

// Get neighbor indices
function getNeighbors(index) {
    const neighbors = [];
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;
    
    if (row > 0) neighbors.push(index - GRID_SIZE);
    if (row < GRID_SIZE - 1) neighbors.push(index + GRID_SIZE);
    if (col > 0) neighbors.push(index - 1);
    if (col < GRID_SIZE - 1) neighbors.push(index + 1);
    
    return neighbors;
}

// Create a random but solvable board
function createRandomBoard() {
    // Fewer moves for easier difficulties
    const movesMap = {3: 5, 4: 10, 5: 20};
    const baseMove = movesMap[GRID_SIZE];
    const numMoves = Math.floor(Math.random() * 6) + baseMove;
    
    for (let i = 0; i < numMoves; i++) {
        const randomIndex = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
        simulateClick(randomIndex);
    }
}

// Simulate a click
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

// Start the game
initGame();