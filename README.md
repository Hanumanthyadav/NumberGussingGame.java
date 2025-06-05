
# Number Guessing Game 🎮

A fun and interactive number guessing game built with HTML, CSS, JavaScript and Java. This project features a modern, responsive design with smooth animations and an intuitive user interface.

![Number Guessing Game](game-preview.png)

## 🎯 Features

- **User-friendly Interface**: Clean and modern design with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Score Tracking**: Keeps track of your winning streak
- **Game History**: Visual history of your guesses with color-coded feedback
- **Limited Attempts**: 5 attempts per round to guess the correct number
- **Instant Feedback**: Color-coded responses (red for too high, blue for too low)
- **Keyboard Support**: Use Enter key to submit guesses
- **Play Again**: Option to start a new game after winning or losing

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository or download the files:
```bash
git clone https://github.com/yourusername/number-guessing-game.git
```

2. Navigate to the project directory:
```bash
cd number-guessing-game
```

3. Open `index.html` in your web browser to start playing!

## 🎮 How to Play

1. The game will generate a random number between 1 and 100
2. Enter your guess in the input field
3. Click the "Guess" button or press Enter
4. You'll receive feedback if your guess is too high or too low
5. Try to guess the correct number within 5 attempts
6. Your score increases each time you win
7. Click "Play Again" to start a new round

## 📁 Project Structure

```
number-guessing-game/
│
├── index.html          # Main HTML file
├── styles.css         # CSS styling
├── script.js         # Game logic
└── README.md        # Project documentation
```

## 🎨 Technologies Used

- HTML5
- CSS3 (with Flexbox)
- JavaScript (ES6+)
- Custom animations
- Responsive design principles

## 🌟 Game Features Explained

### Score System
- Each successful guess within 5 attempts adds 1 point to your score
- Score persists until page refresh

### Guess History
- Each guess is recorded and displayed with visual feedback
- Color coding:
  - 🔴 Red: Too high
  - 🔵 Blue: Too low
  - 💚 Green: Correct guess

### Input Validation
- Only accepts numbers between 1 and 100
- Prevents invalid inputs
- Clear error messages for better user experience

## 🔧 Customization

You can easily customize the game by modifying:

- `maxAttempts` in script.js to change the number of allowed attempts
- Color schemes in styles.css
- Range of numbers by modifying the random number generation in script.js

## 💡 Future Improvements

- Add difficulty levels
- Implement high score system with local storage
- Add sound effects
- Include multiplayer mode
- Add hints system

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Support

For support, email your-email@example.com or open an issue in this repository.

## 🙏 Acknowledgments

- Inspired by classic number guessing games
- Modern UI/UX principles
- Community feedback and suggestions

---

Made with ❤️ by [Hanumanth yadav]

Feel free to star ⭐ this repository if you find it helpful!
```

To use this README:

1. Save it as `README.md` in your project's root directory
2. Replace the following placeholders:
   - `[Your Name]` with your actual name
   - `your-email@example.com` with your contact email
   - `yourusername` in the git clone URL with your actual GitHub username
   - Add a game preview screenshot and update the image path (`game-preview.png`)

This README provides:
- Clear project description
- Comprehensive feature list
- Installation instructions
- Usage guidelines
- Project structure
- Technical details
- Future improvement ideas
- Contributing guidelines
- Support information

The format is optimized for GitHub and includes emojis for better readability and visual appeal. The documentation is thorough enough for both users and potential contributors to understand and work with your project.
