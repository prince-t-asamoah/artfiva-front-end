// import {NavLink} from 'react-router-dom';
// import useState from 'react';
import {Button, Icon, Sidebar, TopBar} from '../components/_index';
import {useAppContext} from '../context/_index';
import Index from '../views/_index';

function Dashboard() {
    let {showSidebar} = useAppContext();


    return(
        <div className="">
            <div>
                <TopBar>
                    <Button classname="barItem hideLarge hoverNone hoverTxtLightGray right margRight">
                        <Icon type="menu-burger" />
                    </Button>
                </TopBar>
            </div>
            {/* {showSidebar ? <Sidebar id="sideBar"/>: null} */}
            <div className="animate-left" style={{ zIndex:'3', width:'300px'}}>
                <Sidebar show={showSidebar}/>
            </div>

            <div className="main" style={{marginLeft:'300px',marginTop:'43px'}}>
                <Index/>
            </div>
        </div>
        );
    };

export default Dashboard;