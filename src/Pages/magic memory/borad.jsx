import { useEffect, useState } from "react";
import "./board.css";
import Card from "./card";
import EndScreen from "./EndScreen";
import butterfly from "../../../assest/img/butterfly.jpg"
import forest from "../../../assest/img/forest.jpg"
import insect from "../../../assest/img/insect.jpg"
import mountain from "../../../assest/img/mountain.jpg"
import river from "../../../assest/img/river.jpg"
import tree from "../../../assest/img/tree.jpg"

const cardImages = [
  { src: butterfly, matched: false },
  { src: forest, matched: false },
  { src: insect , matched: false },
  { src: mountain, matched: false },
  { src: river, matched: false },
  { src: tree, matched: false },
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
  
const[highScore,setHighScore]=useState(JSON.parse(localStorage.getItem("bestscore")))
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
      setHighScore(highScore !==0 ? Math.min(currentTurns,highScore) : currentTurns);
      
     
    }
  }, [flippedCards, turns, highScore, currentTurns , ended]);

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <button className="new-game-button" onClick={shuffleCards}>New Game</button>
        {ended === false ? (
      <div className="card-grid">
          
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
            </div>
         
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
     
      
    {turns!==0 && <p>
        turns: {turns    }    bestscore: {highScore}
      </p>}
      
    </div>
  );
}
