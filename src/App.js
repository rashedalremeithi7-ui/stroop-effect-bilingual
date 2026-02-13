import React, { useState } from 'react';

const App = () => {
  const [phase, setPhase] = useState('welcome');

  const renderContent = () => {
    switch (phase) {
      case 'welcome':
        return <Welcome onStart={() => setPhase('practice')} />;
      case 'practice':
        return <Practice onNext={() => setPhase('actual')} />;
      case 'actual':
        return <Trials onFinish={() => setPhase('results')} />;
      case 'results':
        return <Results onRestart={() => setPhase('welcome')} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Stroop Effect Bilingual</h1>
      {renderContent()}
    </div>
  );
};

const Welcome = ({ onStart }) => <div><h2>Welcome!</h2><button onClick={onStart}>Start</button></div>;
const Practice = ({ onNext }) => <div><h2>Practice Phase</h2><button onClick={onNext}>Next</button></div>;
const Trials = ({ onFinish }) => <div><h2>Actual Trials</h2><button onClick={onFinish}>Finish Trials</button></div>;
const Results = ({ onRestart }) => <div><h2>Results</h2><button onClick={onRestart}>Restart</button></div>;

export default App;