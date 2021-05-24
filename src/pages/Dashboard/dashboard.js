import {NavLink} from 'react-router-dom';
import Inputs from '../../components/Inputs/inputs';

function Dashboard() {
    return(
        <div className="w3-row">
            <div className="w3-col l3 w3-sidebar w3-block" style={{height:'100vh'}}>
                <header className="w3-flat-amethyst w3-bar-item w3-padding"><NavLink to="/"> Artfiva</NavLink><i className="fi fi-rr-angle-double-small-left w3-right"></i></header>
                <Inputs type="text" placeholder="Search" classname="w3-input w3-block"/>
                <NavLink to="" className="w3-block"><i className="fi fi-rr-home w3-padding"></i>Home</NavLink>
                <NavLink to="" className="w3-block"><i className="fi fi-rr-bell w3-padding"></i>Notification</NavLink>
                <NavLink to="" className="w3-block"><i className="fi fi-rr-trophy w3-padding"></i>Goals</NavLink>
                <NavLink to="" className="w3-block"><i className="fi fi-rr-arrow-small-up w3-padding"></i>Show Less</NavLink>
            </div>

            <div className="w3-col w3-rest w3-light-grey" style={{height:'100vh'}}>
                <div className="w3-bar w3-flat-peter-river"></div>
                <p>This is the content area.</p>
            </div>
        </div>
        
        );
    };

export default Dashboard;