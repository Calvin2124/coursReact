import { Link, NavLink } from "react-router-dom";
import chat from "../assets/chat.meme.png"
import '../styles/Header.css'


function Header() {
    return(
        <>
        <header>
            <Link to="/">
                <img className="chat" src={chat} alt="Chat" />
            </Link>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/meteo">Meteo</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;