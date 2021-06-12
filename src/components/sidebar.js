import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Logo,Icon,Button} from './_index';
import Avatar from '../images/avatar.png'

function Sidebar() {
   
    return(
        <>
            <nav className="sidebar collapse light-grey">
                <div className="row">
                    <div className="col s4">
                        <img src={Avatar} alt="Avatar" className="circle margin" style={{width:'46px'}}/>
                    </div>

                    <div className="col s8 bar padding">
                            <span>Welcome, <strong>PRINCE TWUMASI ASAMOAH</strong></span><br/>
                            {/* <NavLink to="#"><Icon type="menu-burger"/></NavLink>
                            <NavLink to="#"><Icon type="menu-burger"/></NavLink>
                            <NavLink to="#"><Icon type="menu-burger"/></NavLink> */}
                    </div>
                    <hr></hr>
                    <div className="container">
                        <h5>Dashboard</h5>
                    </div>
                    
                    <div className="bar-block">
                        {/* <NavLink to="#" className="bar-item button padding-16 hide-large dark-grey hover-black"><Icon type="cross"/> Close Menu</NavLink> */}
                        <NavLink to="#" className="bar-item button padding" activeClassName="indigo"><Icon type=""/>Overview</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>Views</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>Traffic</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>Geo</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>Orders</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>News</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>General</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>History</NavLink>
                        <NavLink to="#" className="bar-item button padding"><Icon type=""/>Settings</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;