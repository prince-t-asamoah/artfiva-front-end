import {NavLink} from 'react-router-dom';

function NavBar() {
    return(
        <div className="w3-container w3-bar w3-padding w3-text-white">
            <NavLink to="/" className="w3-bar-item w3-ripple logo">Artfiva</NavLink>
            <nav class="w3-right">
                <NavLink to="/login" className="w3-bar-item w3-button w3-ripple w3-round-large">Login</NavLink>
                <NavLink to="/Signup" className="w3-bar-item w3-button w3-ripple w3-round-large w3-flat-wisteria">Sign up</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;