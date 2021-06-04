import {NavLink} from 'react-router-dom';

function Sidebar() {
    return(
        <div className="w3-sidebar w3-bar-block w3-flat-peter-river" style={{ width: '25%' }}>
            <NavLink className="w3-bar-item w3-border-bottom w3-padding" activeClassName="w3-button" to="#">Link 1</NavLink>
            <NavLink className="w3-bar-item w3-button w3-border-bottom w3-padding" to="#">Link 1</NavLink>
            <NavLink className="w3-bar-item w3-button w3-border-bottom w3-padding" to="#">Link 1</NavLink>
        </div>
    )
}

export default Sidebar;