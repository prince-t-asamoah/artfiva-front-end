// import {NavLink} from 'react-router-dom';
import {Input, Sidebar} from '../components/_index';

function Dashboard() {
    return(
        // <div className="row">
        //     <div className="col l3 sidebar block" style={{height:'100vh'}}>
        //         <header className="bar-item padding flat-amethyst"><NavLink to="/"> Artfiva</NavLink><i className="fi fi-rr-angle-double-small-left right"></i></header>

        //         <div className="padding-bottom">
        //             <Inputs type="text" placeholder="Search" classname="input block"/>
        //             <NavLink to="" className="block"><i className="fi fi-rr-home padding"></i>Home</NavLink>
        //             <NavLink to="" className="block"><i className="fi fi-rr-bell padding"></i>Notification</NavLink>
        //             <NavLink to="" className="block"><i className="fi fi-rr-trophy padding"></i>Goals</NavLink>
        //             <NavLink to="" className="block"><i className="fi fi-rr-arrow-small-up padding"></i>Show Less</NavLink>
        //         </div>

        //         <div className="padding"><NavLink className="bar-item" to="">Favorites</NavLink><i className="fi fi-rr-angle-small-right right"></i></div>
        //         <div className="padding"><NavLink className="bar-item" to="">Spaces</NavLink><i className="fi fi-rr-angle-small-right right"></i></div>
        //         <div className="padding"><NavLink to="">Dashboards</NavLink><i className="fi fi-rr-angle-small-right right"></i></div>
        //         <div className="padding"><NavLink to="">Docs</NavLink><i className="fi fi-rr-angle-small-right right"></i></div>

        //         <div className="display-bottom padding"><NavLink to="">Favorites</NavLink><i className="fi fi-rr-info right"></i></div>
        //     </div>

        //     <div className="col rest light-grey" style={{height:'100vh'}}>
        //         <div className="bar flat-peter-river"></div>
        //         <p>This is the content area.</p>
        //     </div>
        // </div>
        <div>
            <Sidebar/>
            <div className="grey center" style={{height:'100vh', marginLeft:'25%'}}>
                <div className="bar-block white">
                    <p>Navbar</p>
                </div>
                <h1>Dashboard Content</h1>
                <p>This is the dashboard main content area.</p>
            </div>
        </div>
        );
    };

export default Dashboard;