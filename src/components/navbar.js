import {NavLink} from 'react-router-dom';

function NavBar() {
    return(
        <div className="container bar padding text-white">
            <NavLink to="/" className="bar-item ripple logo">Artfiva</NavLink>
            <nav class="right">
                <NavLink to="/login" className="bar-item button ripple round-large">Login</NavLink>
                <NavLink to="/Signup" className="bar-item button ripple round-large flat-wisteria">Sign up</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;