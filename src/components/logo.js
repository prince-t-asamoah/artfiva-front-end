import {NavLink} from 'react-router-dom';

function Logo({classname}) {
    return(
        <NavLink to="/">
            <span className={`${classname} padMed`}>
                Artfiva
            </span>
        </NavLink>
    )
}

export default Logo;