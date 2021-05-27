import {useState} from 'react';
// import {useAppContext} from '../../context/appContext';
import {Link} from 'react-router-dom';

import Inputs from '../../components/Inputs/inputs';
import Buttons from '../../components/Buttons/buttons';
import NavBar from '../../components/Header/navbar';

function Signup() {
    const [values, setValues] = useState({});
    // const {toPage} = useAppContext();
    // const appHistory = useHistory();

    function updateValues(e) {
        setValues({...values, [e.target.name]:[e.target.value]});
        // console.log(values);
    }
    
    function submit(e) {
        e.preventDefault();
        
            fetch("https://localhost:5000/api/v1/signup", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                }, err => console.log(err));
        }

    return(
        <div className="bg-2">
            <NavBar />
            <div className="w3-display-middle">
                <form className="w3-container w3-card-2 w3-round-large w3-light-grey w3-padding w3-animate-bottom form-size">
                    <header className="w3-container w3-padding"><h1 className="w3-center w3-margin">Sign Up</h1></header>

                    <div className="w3-container">
                        <Inputs type="text" placeholder="Enter full name" name="username" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues} />
                        <Inputs type="email" placeholder="Enter email" name="email" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues} />
                        <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues} />
                        <Inputs type="password" placeholder="Confirm password" name="cpassword" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues} />
                        <Buttons text="Join Now!" classname="w3-button w3-block w3-round-large w3-flat-wisteria w3-margin-top w3-padding" onclick={submit} />
                    </div>

                    <footer className="w3-container w3-center">
                        <p className="w3-small">Already a member? <Link to="/login">Login</Link></p>
                        <p className="w3-tiny">By clicking the button above, you agree to our <Link to="">Terms of Service</Link> and <Link>Privacy Policy</Link>.</p>
                    </footer>
                </form>
            </div>
        </div>
         ) 
    };
export default Signup;