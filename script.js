// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

// Game configuration constants
const DROPLET_WIDTH = 30; // Width of a water droplet in pixels
const DROPLET_FALL_SPEED = 2; // Pixels per frame
const DROPLET_SPAWN_INTERVAL = 1500; // Milliseconds between new droplets

// Game variables
let score = 0;
let waterCollected = 0;
let gameActive = false;
let dropletInterval = null;

// Get DOM elements
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const waterCollectedDisplay = document.getElementById('water-collected');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

// Function to create a water droplet
function createWaterDroplet() {
    const droplet = document.createElement('div');
    droplet.className = 'water-droplet';
    
    // Random horizontal position
    const randomX = Math.random() * (gameArea.offsetWidth - DROPLET_WIDTH);
    droplet.style.left = `${randomX}px`;
    droplet.style.top = '0px';
    
    // Add click event listener
    droplet.addEventListener('click', () => {
        if (gameActive) {
            // Increase score
            score += 10;
            waterCollected += 1;
            
            // Update displays
            scoreDisplay.textContent = score;
            waterCollectedDisplay.textContent = waterCollected;
            
            // Remove the droplet
            droplet.remove();
            
            console.log(`Droplet clicked! Score: ${score}, Water: ${waterCollected}`);
        }
    });
    
    // Add droplet to game area
    gameArea.appendChild(droplet);
    
    // Animate droplet falling
    let position = 0;
    
    const fallInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(fallInterval);
            droplet.remove();
            return;
        }
        
        position += DROPLET_FALL_SPEED;
        droplet.style.top = `${position}px`;
        
        // Remove droplet if it reaches the bottom
        if (position > gameArea.offsetHeight) {
            clearInterval(fallInterval);
            droplet.remove();
        }
    }, 20);
}

// Function to start the game
function startGame() {
    if (gameActive) return;
    
    gameActive = true;
    startButton.textContent = 'Playing...';
    startButton.disabled = true;
    
    console.log('Game started!');
    
    // Create water droplets at intervals
    dropletInterval = setInterval(() => {
        if (gameActive) {
            createWaterDroplet();
        }
    }, DROPLET_SPAWN_INTERVAL);
}

// Function to stop the game
function stopGame() {
    gameActive = false;
    
    if (dropletInterval) {
        clearInterval(dropletInterval);
        dropletInterval = null;
    }
    
    startButton.textContent = 'Start Game';
    startButton.disabled = false;
    
    console.log('Game stopped!');
}

// Function to reset the game
function resetGame() {
    stopGame();
    
    // Clear all droplets from the game area
    const droplets = document.querySelectorAll('.water-droplet');
    droplets.forEach(droplet => droplet.remove());
    
    // Reset score and water collected
    score = 0;
    waterCollected = 0;
    scoreDisplay.textContent = score;
    waterCollectedDisplay.textContent = waterCollected;
    
    console.log('Game reset!');
}

// Add event listeners to buttons
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

console.log('Game initialized. Click "Start Game" to begin!');
