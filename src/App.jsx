
import {  Route,Routes} from 'react-router-dom'
import Navbar from './components/NAVBAR/Navbar'
import Quiz from "./Pages/QUIZ/Quiz"
import Home from './Pages/Home';
import Todolist from './Pages/todolist/Todolist';

import './App.css'

import Board from './Pages/magic memory/borad';



function App() {
  
  return (<>
      
    
      <Navbar />
      <Routes>

      <Route element={<Home/>} path="/" />
      <Route element={<Quiz/>} path="/quiz" />
      <Route element={< Todolist/>} path="/todolist" />
      
      <Route element={< Board/>} path="/magicmemory" />

      </Routes>
   
    </>
  );
}

export default App
