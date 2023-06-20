import { NavLink } from "react-router-dom";
import logo from '../../Images/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"></img>
            <div>
                <NavLink to="/Start-ALT" className={ ({isActive}) => isActive ? "nav-active" : "" }>Home</NavLink>
                <NavLink to="/portfolio" className={ ({isActive}) => isActive ? "nav-active" : "" }>Portfolio</NavLink>
                <NavLink to="/services" className={ ({isActive}) => isActive ? "nav-active" : "" }>Services</NavLink>
                <NavLink to="/contact" className={ ({isActive}) => isActive ? "nav-active" : "" }>Contact</NavLink>
            </div>
        </nav>
    )
}