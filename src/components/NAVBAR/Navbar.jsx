import { Link } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">Rawact </div>
        <div className="nav-list">
          <ul>
          
          <Link to="/" className="li"> Home</Link> 
          <Link to="/quiz" className="li"> Quiz</Link> 
          <Link to="/todolist" className="li"> to-do-list</Link> 
          
          <Link to="/magicmemory" className="li"> magic memory</Link> 
          </ul>
        </div>
      </div>
    );
}

export default Navbar
