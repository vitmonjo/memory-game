import './App.css';
import CardsWrapper from './components/CardsWrapper';
import Modal from './components/Modal';
import React, { useState, useEffect } from 'react';
import { fetchPokemons } from './components/functions';
import { intervals } from './components/intervals';

function App() {
  const [pokemons, setPokemons] = useState({});
  const [selectedInterval, setSelectedInterval] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [numOfCards, setNumOfCards] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRegionChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  const handleCardClick = (cardName) => {
    checkChoice(cardName);
  };

  const handleSliderChange = (event) => {
    setNumOfCards(event.target.value);
    setPokemons([]);
    setSelectedInterval("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function resetGame() {
    setSelectedPokemons([]);
    setCurrentScore(0);
  }

  function startGame() {
    if (intervals[selectedInterval] !== undefined) {
      fetchPokemons(intervals[selectedInterval], numOfCards).then((pokemonsObject) => {
        resetGame();
        setPokemons(pokemonsObject);
      });
    }
  }

  function checkChoice(choice) {
    if (selectedPokemons.includes(choice)) {
      setModalMessage('Game Over!');
      setShowModal(true);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      if (newScore - 1 === numOfCards - 1) {
        setModalMessage('You Win!');
        setShowModal(true);
      } else {
        setSelectedPokemons([...selectedPokemons, choice]);
      }
    }
  }  

  useEffect(() => {
    if (selectedInterval !== "") startGame();
    else setPokemons([]);
  }, [selectedInterval]);

  useEffect(() => {
    if (!showModal) {
      startGame();
    }
  }, [showModal]);

  return (
    <div className="content">
      <header>
        <h1>Pokémon Memory Game</h1>
        <select value={selectedInterval} onChange={handleRegionChange}>
          <option value="">Select an interval</option>
          {Object.keys(intervals).map((intervalName) => (
            <option key={intervalName} value={intervalName}>
              {intervalName}
            </option>
          ))}
        </select>
        <div className="scoreboard">
          <div>Current Score: {currentScore}</div>
          <div>High Score: {highScore}</div>
          <div className="slider-wrapper">
            <div htmlFor="numOfCardsSlider">Number of Cards: </div>
            <input
              type="range"
              min="3"
              max="30"
              value={numOfCards}
              className="slider"
              id="numOfCardsSlider"
              onChange={handleSliderChange}
            />
            <div className="slider-value">
              <span>{numOfCards}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="card-container">
        <CardsWrapper pokemons={pokemons} onClick={handleCardClick} />
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
}

export default App;
