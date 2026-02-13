function generateRandomizedTrials(numTrials, isPractice = false) {
    const trials = [];
    for (let i = 0; i < numTrials; i++) {
        const trial = {
            id: i + 1,
            type: isPractice ? 'practice' : 'actual',
            stimuli: generateRandomStimuli(),
        };
        trials.push(trial);
    }
    return trials;
}

function generateRandomStimuli() {
    // Your logic for generating random stimuli goes here.
    // For example, random color-word pairs or other relevant stimuli.
    const colors = ['red', 'green', 'blue', 'yellow'];
    const words = ['happy', 'sad', 'fast', 'slow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return { color: randomColor, word: randomWord };
}

// Example usage:
// const practiceTrials = generateRandomizedTrials(10, true);
// const actualTrials = generateRandomizedTrials(20);
