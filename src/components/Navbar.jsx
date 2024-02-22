import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";


function Navbar() {
    return (
    <nav className="Navbar" style={{background: "lightblue", textAlign: "center"}}>
      <ul>
        <Link to="/"> <img src={homeIcon} alt="Home" className="icon" /> </Link> 
      </ul>
    </nav>
      );
}

export default Navbar;


// Navigation - <Link> : We need some links, and preferably, we need them in the navbar.
// Our component <Navbar /> already contains the basic structure. We’ll need to update and add links that we can use to navigate between the pages.
// We will use the react-router-dom <Link> component. 
// <Link> is a React Router and it's the same as: <a href=""> </a>. 
// Whenever you render a <Link> component, an anchor (<a>) will be rendered in your application’s HTML.


// The <NavLink> component is also provided by react-router-dom and is an extension of <Link>.
// It provides additional features, such as the ability to apply a specific style or class to the link when it matches the current URL.