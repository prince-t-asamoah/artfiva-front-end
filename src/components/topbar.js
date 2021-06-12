// import useState from 'react';
// import {useAppContext} from '../context/_index';
import {Logo} from '../components/_index';

function TopBar({children}){
    // const [toggle, setToggle] = useState();
    // let {showSidebar} = useAppContext();

    // function toggle() {
    //     showSidebar = "none";
    // }

    return(
        <div className="bar top bg-transparent txtLg padLg" style={{zIndex:'4'}}>
            <Logo classname="barItem left margLeft"/>
            {children}
        </div>
    )
}

export default TopBar;