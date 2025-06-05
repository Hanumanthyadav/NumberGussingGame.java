// Game variables
let targetNumber;
let attempts;
let maxAttempts = 5;
let score = 0;
let gameActive = true;

// DOM elements
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const playAgainBtn = document.getElementById('play-again');
const messageElement = document.querySelector('.message');
const attemptsElement = document.getElementById('attempts');
const scoreElement = document.getElementById('score');
const guessHistory = document.getElementById('guess-history');

// Initialize the game
function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = maxAttempts;
    gameActive = true;
    
    // Reset UI
    attemptsElement.textContent = attempts;
    messageElement.textContent = 'Try to guess the number between 1 and 100';
    guessHistory.innerHTML = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    playAgainBtn.classList.add('hidden');
    
    // Focus on input
    guessInput.focus();
}

// Handle guess
function handleGuess() {
    if (!gameActive) return;
    
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100';
        guessInput.value = '';
        return;
    }
    
    attempts--;
    attemptsElement.textContent = attempts;
    
    // Create guess history item
    const guessItem = document.createElement('div');
    guessItem.classList.add('guess-item');
    
    if (userGuess === targetNumber) {
        // Correct guess
        guessItem.classList.add('correct');
        guessItem.textContent = `${userGuess} - Correct!`;
        messageElement.textContent = 'Congratulations! You won! 🎉';
        score++;
        scoreElement.textContent = score;
        endGame(true);
    } else {
        // Wrong guess
        if (userGuess < targetNumber) {
            guessItem.classList.add('low');
            guessItem.textContent = `${userGuess} - Too low!`;
            messageElement.textContent = 'Too low! Try again.';
        } else {
            guessItem.classList.add('high');
            guessItem.textContent = `${userGuess} - Too high!`;
            messageElement.textContent = 'Too high! Try again.';
        }
        
        // Check if out of attempts
        if (attempts === 0) {
            endGame(false);
        }
    }
    
    guessHistory.insertBefore(guessItem, guessHistory.firstChild);
    guessInput.value = '';
    guessInput.focus();
}

// End game
function endGame(won) {
    gameActive = false;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    playAgainBtn.classList.remove('hidden');
    
    if (!won) {
        messageElement.textContent = `Game Over! The number was ${targetNumber}`;
    }
}

// Event listeners
guessBtn.addEventListener('click', handleGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});
playAgainBtn.addEventListener('click', initGame);

// Start the game
initGame(); 