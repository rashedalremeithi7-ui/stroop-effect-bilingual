import React from 'react';

const PracticePhase = ({ trials, onFeedback }) => {
    const [currentTrial, setCurrentTrial] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');

    const handleTrialComplete = (response) => {
        const trialFeedback = response === trials[currentTrial].correctAnswer ? 'Correct!' : 'Try again!';
        setFeedback(trialFeedback);

        // Proceed to next trial after a delay
        setTimeout(() => {
            setCurrentTrial((prev) => prev + 1);
            setFeedback('');
        }, 1000);
    };

    return (
        <div>
            {currentTrial < trials.length ? (
                <div>
                    <h2>Trial {currentTrial + 1}</h2>
                    <p>{trials[currentTrial].question}</p>
                    <button onClick={() => handleTrialComplete('response1')}>{trials[currentTrial].response1}</button>
                    <button onClick={() => handleTrialComplete('response2')}>{trials[currentTrial].response2}</button>
                    <p>{feedback}</p>
                </div>
            ) : (
                <h2>All trials completed!</h2>
            )}
        </div>
    );
};

export default PracticePhase;