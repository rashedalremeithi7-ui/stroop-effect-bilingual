// src/utils/stroopTrialGenerator.js

/**
 * Generates randomized Stroop trials for both English and Arabic languages.
 * Includes practice trials and actual trials with congruent and incongruent pairs.
 */

function generateTrials() {
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown', 'Purple'];
    const wordsInArabic = ['أحمر', 'أخضر', 'أزرق', 'أصفر', 'بني', 'بنفسجي'];

    const congruentTrials = colors.map((color, index) => ({
        word: wordsInArabic[index],
        color: color,
        type: 'congruent'
    }));

    const incongruentTrials = colors.map((color, index) => ({
        word: wordsInArabic[(index + 1) % colors.length],
        color: color,
        type: 'incongruent'
    }));

    // Shuffle function
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Create trials
    const practiceTrials = shuffle(congruentTrials.concat(incongruentTrials)).slice(0, 6);
    const actualTrials = shuffle(congruentTrials).slice(0, 20).concat(shuffle(incongruentTrials).slice(0, 20));

    return {
        practiceTrials: practiceTrials,
        actualTrials: actualTrials
    };
}

module.exports = { generateTrials };