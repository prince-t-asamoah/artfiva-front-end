import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Logo,Icon,Button} from './_index';

function Sidebar() {
    const[collapse, setCollapse] = useState('bar-block');

    function hide() {
        setCollapse('hide');
        console.log(collapse);
    }

    return(
        <div className={`sidebar dark-gray ${collapse}`} style={{width:'25%'}}>
            <div className="bar-item">
                <NavLink className="bar-item padding" to="#"><Logo /></NavLink>
                <Button classname="right" onclick={()=>hide}><Icon type="angle-double-small-left"/></Button>
            </div>

            <NavLink className="bar-item button padding" to="#">Home</NavLink>
            <NavLink className="bar-item button padding" to="#">Notifications</NavLink>
            <NavLink className="bar-item button padding" to="#">Goals</NavLink>
            <NavLink className="bar-item button padding" to="#">Show Less</NavLink>
        </div>
    )
}

export default Sidebar;