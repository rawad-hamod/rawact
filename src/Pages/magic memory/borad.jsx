import { useEffect, useState } from "react";
import "./board.css";
import Card from "./card";
import EndScreen from "./EndScreen";

const cardImages = [
  { src: "../../../assest/img/butterfly.jpg", matched: false },
  { src: "../../../assest/img/forest.jpg", matched: false },
  { src: "../../../assest/img/insect.jpg", matched: false },
  { src: "../../../assest/img/mountain.jpg", matched: false },
  { src: "../../../assest/img/river.jpg", matched: false },
  { src: "../../../assest/img/tree.jpg", matched: false },
];

export default function Board() {
  // states
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);
  const [ended, setEnded] = useState(false);
  const [currentTurns, setCurrentTurns] = useState(0);
  const[localStorageHighScore, setLocalStorageHighScore] =useState(JSON.parse(localStorage.getItem("bestscore")) );
const[highScore,setHighScore]=useState(localStorageHighScore)
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setFlippedCards([]);
    setEnded(false);
  };

  //   handle choice
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };
  // ending the game
  // check if two cards are matched
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src) {
        setCards((preCards) => {
          return preCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
        setFlippedCards((prev) => [...prev, firstChoice, secondChoice]);

        // if(cards.length===flippedCards.length){
        //   setEnded(true)
        // }
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [firstChoice, secondChoice]);

  // set turn & reset choices
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((turns) => turns + 1);
  };
  // finish game
  useEffect(() => {
    if (flippedCards.length === cardImages.length * 2) {
      setCurrentTurns(turns);
      setEnded(true);
      setHighScore(Math.min(currentTurns,highScore));
      setLocalStorageHighScore(localStorage.setItem("bestscore",highScore!==0? JSON.stringify(highScore): JSON.stringify(currentTurns) ));
     
    }
  }, [flippedCards, turns, highScore, currentTurns , ended]);
console.log(cards)
  return (
    <div className="container">
      <h1>Memory Game</h1>
      <button className="new-game-button" onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {ended === false ? (
          <>
            {cards.map((card) => {
              return (
                <>
                  <Card
                    key={card.id}
                    src={card.src}
                    handleChoice={() => handleChoice(card)}
                    flipped={
                      card === firstChoice ||
                      card === secondChoice ||
                      card.matched
                    }

                  />
                </>
              );
            })}
          </>
        ) : (
          <>
          <div className="results">
            <EndScreen 
            turns={turns}
            bestScore={highScore}
            />
            </div>
          </>
        )}
      </div>
    {turns!==0 && <p>
        turns: {turns} bestscore: {highScore}
      </p>}
      
    </div>
  );
}
