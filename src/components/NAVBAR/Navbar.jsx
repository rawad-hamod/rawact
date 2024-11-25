import { Link } from "react-router-dom"
import "./Navbar.css"
import {FaCalendar, FaHome, FaList, FaMagic, FaQuestion } from "react-icons/fa";
import { useState } from "react";
import { FaX } from "react-icons/fa6";


const Navbar = () => {
  const[active , setActive]=useState(false);
  function clickMenu(){
    active===true?
    setActive(false):
    setActive(true);
    console.log(active)
  }
    return (
      <>
      <div className="navbar">
        <div className="logo">Rawact </div>
        <div className="nav-list">
          <ul>
            <Link to="/" className="li">
              {" "}
             <FaHome/> Home
            </Link>
            <Link to="/quiz" className="li">
              {" "}
            <FaQuestion/>  Quiz
            </Link>
            <Link to="/todolist" className="li">
              
            <FaCalendar/>  to-do-list
            </Link>

            <Link to="/magicmemory" className="li">
              {" "}
            <FaMagic/>  magic memory
            </Link>
          </ul>
        </div>
        <div className="menu-icon" onClick={clickMenu}>{active? <FaX fontSize={"24px"} /> :<FaList fontSize={"24px"} color="#9E2E92" />}</div>
        </div>

        <div className={`${"nav-menu "}${active===true?"active":""}`} >
          <Link to="/" className="li" onClick={()=>setActive(false)}>
            {" "}
            <FaHome/> Home
          </Link>
          <Link to="/quiz" className="li" onClick={()=>setActive(false)}>
            {" "}
            <FaQuestion/> Quiz
          </Link>
          <Link to="/todolist" className="li" onClick={()=>setActive(false)}>
            {" "}
            <FaCalendar/>  to-do-list
          </Link>
          <Link to="/magicmemory" className="li" onClick={()=>setActive(false)}>
            {" "}
            <FaMagic/> magic memory
          </Link>
        </div>
     
      </>
    );
}

export default Navbar
