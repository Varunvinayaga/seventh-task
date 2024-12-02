import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber(1, 100));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Function to generate a random number in the specified range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Handle input change
  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  // Handle form submission (when player makes a guess)
  const handleGuess = (e) => {
    e.preventDefault();
    const numericGuess = parseInt(guess, 10);

    if (isNaN(numericGuess)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (numericGuess < targetNumber) {
      setFeedback('Too low! Try again.');
    } else if (numericGuess > targetNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback(`Correct! You found the number in ${attempts + 1} attempts.`);
    }
    setGuess('');
  };

  // Handle game reset
  const resetGame = () => {
    setTargetNumber(generateRandomNumber(1, 100));
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100!</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          style={{
            padding: '10px',
            marginRight: '10px',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Guess
        </button>
      </form>
      {feedback && <p style={{ marginTop: '20px', fontSize: '18px' }}>{feedback}</p>}
      <p>Attempts: {attempts}</p>
      <button
        onClick={resetGame}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default NumberGuessingGame;
