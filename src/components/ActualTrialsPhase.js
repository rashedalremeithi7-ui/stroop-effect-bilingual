import React, { useState, useRef } from 'react';
const ActualTrialsPhase = ({ trials, onComplete }) => {
    const [currentTrial, setCurrentTrial] = useState(0);
    const [results, setResults] = useState([]);
    const trialStartTime = useRef(Date.now());

    const handleResponse = (response) => {
        const responseTime = Date.now() - trialStartTime.current;
        const isCorrect = response === trials[currentTrial].correctAnswer;
        setResults([
            ...results,
            { trialIndex: currentTrial, response, isCorrect, responseTime },
        ]);

        if (currentTrial < trials.length - 1) {
            setCurrentTrial(currentTrial + 1);
            trialStartTime.current = Date.now();
        } else {
            onComplete(results);
        }
    };

    return (
        <div>
            {currentTrial < trials.length ? (
                <div>
                    <h2>Trial {currentTrial + 1} of {trials.length}</h2>
                    <p>{trials[currentTrial].question}</p>
                    <button onClick={() => handleResponse('response1')}>{trials[currentTrial].response1}</button>
                    <button onClick={() => handleResponse('response2')}>{trials[currentTrial].response2}</button>
                </div>
            ) : (
                <h2>All trials completed!</h2>
            )}
        </div>
    );
};
export default ActualTrialsPhase;