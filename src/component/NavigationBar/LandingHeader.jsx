import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './LandingHeader.css'; 
import logo from "./logoV1.png";

export default function LandingHeader() {
    return (
        <>
            <nav className="landing-header">
                <Link to="/"><img src={logo} /></Link>
                <ul>
                    
                    <li>
                        <Link to="/about-us">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/feature">FEATURE</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">CONTACT</Link>
                    </li>
                    <li className="signin">
                    <Link to="/sign-in">SIGN IN</Link>
                    </li>
                    <li>
                    <FiMenu />
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}
