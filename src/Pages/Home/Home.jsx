import { Link } from "react-router-dom";

import "./Home.css"


export default function Home() {
    return (
      <div className="container home">
        <h1>
          Welcome to My Web App Portfolio <span className="logo">Rawact</span>
        </h1>
<p> Its is a portfolio web app consists of three pages to practice different react concepts, I hope you find it interesting and never hesitate to send notes and feedback , or questions if you need</p>
        <p>
          <b>1-Quiz App</b>: Put your knowledge to the test with our quiz app!
          Choosen from a variety of topics, answer multiple-choice questions, and
          see how you score. Perfect for trivia lovers and learners alike.
          <Link to="/quiz"> click here to go to test your general information</Link>
        </p>

        <p>
          <b>2-To-Do List</b>: Stay organized and productive with the built-in
          to-do list. Easily add, manage, and track your tasks with a
          user-friendly interface. You can click a check box to mark your completed task, also You can delete any task , you will not miss any thing even if you leave the site<Link to="/todolist"> click here to go to To-Do-List</Link>
        </p>
        <p>
          <b>3-Memory Game</b>: Test your cognitive skills with this engaging
          memory game! Match pairs of cards and challenge yourself to remember
          their positions. It’s a fun way to improve concentration and memory.
          <Link to="/magicmemory"> click here to go to memory game</Link>
        </p>

        <p>
          Each page is designed with a sleek, intuitive interface to ensure
          seamless interaction and a great user experience. Enjoy exploring, and
          thank you for visiting!
        </p>
      </div>
    );
}
