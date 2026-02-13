import React, { useState } from 'react';

const WelcomeScreen = () => {
    const [language, setLanguage] = useState('English');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <h1>Welcome to the Stroop Effect Bilingual App</h1>
            <label htmlFor="language-select">Choose a language:</label>
            <select id="language-select" value={language} onChange={handleLanguageChange}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
            </select>
            <p>You have selected: {language}</p>
        </div>
    );
};

export default WelcomeScreen;