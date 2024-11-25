import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="container">
           <h1>Welcome to My Web App Portfolio <span className="logo">Rawact</span></h1>
           <ol>
            
            <li><p><b>Quiz App</b>: Put your knowledge to the test with our quiz app! Choose from a variety of topics, answer multiple-choice questions, and see how you score. Perfect for trivia lovers and learners alike.</p></li>
            
            <li><p><b>To-Do List</b>: Stay organized and productive with the built-in to-do list. Easily add, manage, and track your tasks with a user-friendly interface. Prioritize and check off tasks to stay on top of your goals.</p></li>
            <li><p><b>Memory Game</b>: Test your cognitive skills with this engaging memory game! Match pairs of cards and challenge yourself to remember their positions. It’s a fun way to improve concentration and memory.<Link to="/magicmemory">go to memory game</Link></p></li>
           </ol>

           <p>Each page is designed with a sleek, intuitive interface to ensure seamless interaction and a great user experience. Enjoy exploring, and thank you for visiting!</p>
        </div>
    )
}
