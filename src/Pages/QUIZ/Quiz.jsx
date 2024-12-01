import { useEffect, useState } from "react";
import he from "he";
import "./Quiz.css";

const Quiz = () => {
  const [newGame, setNewGame] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showResullt, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();

        const filteredData = data.results.map((item) => ({
          question: item.question,
          correctAnswer: item.correct_answer,
          incorrectAnswers: item.incorrect_answers,
          answers: item.incorrect_answers.concat(item.correct_answer).sort(),
        }));
        setQuizQuestions(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    if (newGame) {
      fetchData();
      setNewGame(false);
    }
  }, [newGame]);

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  function onClickNext() {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,

            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== quizQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      setActiveQuestion(0);
    }
  }
  function onAnswerClick(a, b, c) {
    setSelectedAnswerIndex(c);
    if (a === b) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  }
  function startNewGame() {
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setNewGame(true);
  }

  return (
    <div className="container quiz">
      {!showResullt ? (
        quizQuestions.length > 1 ? (
          <>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(quizQuestions.length)}
              </span>
            </div>

            <h1>quiz</h1>

            <p>{he.decode(quizQuestions[activeQuestion].question)}</p>
            <div>
              {
                <ul className="answers">
                  {quizQuestions[activeQuestion].answers.map(
                    (answer, index) => (
                      <li
                        onClick={() =>
                          onAnswerClick(
                            answer,
                            quizQuestions[activeQuestion].correctAnswer,
                            index
                          )
                        }
                        key={index}
                        className={
                          selectedAnswerIndex === index
                            ? "selected-answer"
                            : null
                        }
                      >
                        {he.decode(answer)}{" "}
                      </li>
                    )
                  )}
                </ul>
              }
            </div>
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === quizQuestions.length - 1 ? "finish" : "next"}
            </button>
          </>
        ) : (
          <p>loading...</p>
        )
      ) : (
        <div className="results">
          <h3>Results</h3>
          <p>
            Total Question: <span>{quizQuestions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <button onClick={startNewGame}>New Game</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
