// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

// Get references to HTML elements
const switchCanBtn = document.getElementById('switchCanBtn');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');
const soundBtn = document.getElementById('soundBtn');
const litersValue = document.getElementById('litersValue');
const moneyValue = document.getElementById('moneyValue');

// Game state variables
let liters = 125;
let money = 15;
let isPaused = false;
let isSoundOn = true;

// Switch Jerry Can button handler
if (switchCanBtn) {
	switchCanBtn.addEventListener('click', function() {
		console.log('Switching jerry can...');
		// Add 20 liters when switching cans
		liters = liters + 20;
		money = money + 2;
		
		// Update the display
		litersValue.textContent = `${liters} L`;
		moneyValue.textContent = `$${money}`;
	});
}

// Pause button handler
if (pauseBtn) {
	pauseBtn.addEventListener('click', function() {
		isPaused = !isPaused; // Toggle pause state
		
		if (isPaused) {
			pauseBtn.querySelector('.icon').textContent = '▶️';
			console.log('Game paused');
		} else {
			pauseBtn.querySelector('.icon').textContent = '⏸️';
			console.log('Game resumed');
		}
	});
}

// Restart button handler
if (restartBtn) {
	restartBtn.addEventListener('click', function() {
		console.log('Restarting game...');
		// Reset game values
		liters = 0;
		money = 0;
		
		// Update the display
		litersValue.textContent = `${liters} L`;
		moneyValue.textContent = `$${money}`;
	});
}

// Sound button click
if (soundBtn) {
	soundBtn.addEventListener('click', function() {
		isSoundOn = !isSoundOn; // Toggle sound state
		
		if (isSoundOn) {
			soundBtn.querySelector('.icon').textContent = '🔊';
			console.log('Sound on');
		} else {
			soundBtn.querySelector('.icon').textContent = '🔇';
			console.log('Sound off');
		}
	});
}

console.log('Charity Water Game loaded! Click the buttons to play.');
