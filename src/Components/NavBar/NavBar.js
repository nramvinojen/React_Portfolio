import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import './../NavBar/NavBar.css';

function NavBar(){

    return(
        <div>
        <ul id="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  
  }
  
  export default NavBar;