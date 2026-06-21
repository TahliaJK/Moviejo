import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar({
    darkMode,
    setDarkMode
}){
    return  <nav className="navbar">
        <div className= "navbar-brand">
            <Link to="/">🔴Moviejo🔵 </Link>
        </div>
        <div className= "navbar-links">
            <Link to="/" className="nav-link">HomePage</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/watched" className="nav-link">Watched</Link>
            <button
    className="theme-btn"
    onClick={() =>
        setDarkMode(!darkMode)
    }
>
    {darkMode ? "☀️" : "🔴"}
</button>
        </div>
        </nav>
}

export default NavBar; 