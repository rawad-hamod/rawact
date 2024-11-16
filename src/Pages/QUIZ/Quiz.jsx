import  { useState } from "react";
import { quiz } from "../../assets/questions";
import "./Quiz.css"
const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
const [selectedAnswer,setSelectedAnswer]=useState("");
const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(null);
const[result,setResult]=useState({
    score:0,
    correctAnswers:0,
    wrongAnswers:0,
});
const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
const[showResullt,setShowResult]=useState(false);


  const { questions } = quiz;
  const {  choices,correctAnswer } = questions[activeQuestion];


  function onClickNext(){
    setSelectedAnswerIndex(null);
    console.log(activeQuestion);
    setResult((prev)=> selectedAnswer?
    {
     ...prev,
     score:prev.score+5,
     correctAnswers:prev.correctAnswers+1,}
     : {
        ...prev,
        
        wrongAnswers:prev.wrongAnswers+1
    });
    if(activeQuestion!==questions.length-1){
      setActiveQuestion((prev)=>prev+1)
    }else{
      setShowResult(true)
    
    }
  }
function onAnswerClick(answer,index){
  setSelectedAnswerIndex(index);
  
  
    if(answer===correctAnswer){
        setSelectedAnswer(true);
    }else{
        
        setSelectedAnswer(false);
    }
    
}
  return (
   
    <div className="quiz-container">
 
    {!showResullt?  
     (<>
        <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
        <span className="total-question">/{addLeadingZero(questions.length)}</span>
     
      <h1>quiz</h1>
      <p>{questions[activeQuestion].question}</p>

      <ul>
        {choices.map((answer,index) => (
          <li onClick={()=>onAnswerClick(answer,index)} key={index} className={index===selectedAnswerIndex?"selected-answer":null}>{answer} </li>
        ))}
      </ul>
      <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>{activeQuestion===questions.length-1?"finish":"next"}</button>
      </>
      ):(
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
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
        </div>
      )}
    </div>
      )
 }



export default Quiz;
