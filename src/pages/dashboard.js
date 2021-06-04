// import {NavLink} from 'react-router-dom';
import {Input, Sidebar} from '../components/_index';

function Dashboard() {
    return(
        // <div className="w3-row">
        //     <div className="w3-col l3 w3-sidebar w3-block" style={{height:'100vh'}}>
        //         <header className="w3-bar-item w3-padding w3-flat-amethyst"><NavLink to="/"> Artfiva</NavLink><i className="fi fi-rr-angle-double-small-left w3-right"></i></header>

        //         <div className="w3-padding-bottom">
        //             <Inputs type="text" placeholder="Search" classname="w3-input w3-block"/>
        //             <NavLink to="" className="w3-block"><i className="fi fi-rr-home w3-padding"></i>Home</NavLink>
        //             <NavLink to="" className="w3-block"><i className="fi fi-rr-bell w3-padding"></i>Notification</NavLink>
        //             <NavLink to="" className="w3-block"><i className="fi fi-rr-trophy w3-padding"></i>Goals</NavLink>
        //             <NavLink to="" className="w3-block"><i className="fi fi-rr-arrow-small-up w3-padding"></i>Show Less</NavLink>
        //         </div>

        //         <div className="w3-padding"><NavLink className="w3-bar-item" to="">Favorites</NavLink><i className="fi fi-rr-angle-small-right w3-right"></i></div>
        //         <div className="w3-padding"><NavLink className="w3-bar-item" to="">Spaces</NavLink><i className="fi fi-rr-angle-small-right w3-right"></i></div>
        //         <div className="w3-padding"><NavLink to="">Dashboards</NavLink><i className="fi fi-rr-angle-small-right w3-right"></i></div>
        //         <div className="w3-padding"><NavLink to="">Docs</NavLink><i className="fi fi-rr-angle-small-right w3-right"></i></div>

        //         <div className="w3-display-bottom w3-padding"><NavLink to="">Favorites</NavLink><i className="fi fi-rr-info w3-right"></i></div>
        //     </div>

        //     <div className="w3-col w3-rest w3-light-grey" style={{height:'100vh'}}>
        //         <div className="w3-bar w3-flat-peter-river"></div>
        //         <p>This is the content area.</p>
        //     </div>
        // </div>
        <div>
            <Sidebar/>
            <div className="w3-grey" style={{height:'100vh', marginLeft:'25%'}}>
                <p>This is dashboard content area.</p>
            </div>
        </div>
        );
    };

export default Dashboard;