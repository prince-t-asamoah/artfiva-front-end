// import { useAppContext } from '../../context/appContext';
import {useState} from 'react';
import { Link} from 'react-router-dom';

import Buttons from '../../components/Buttons/buttons';
import Inputs from '../../components/Inputs/inputs';
import NavBar from '../../components/Header/navbar';


function Login() {
    const [values, setValues] = useState({});
    // const [empty, setEmpty] = useState();
    // const appHistory = useHistory();
    // const {toPage} = useAppContext();

    function updateValues(e) {
        setValues({ ...values, [e.target.name]: [e.target.value] });
        // console.log(setValues);
    }

    function setEmpty() {
        setValues({});
    }

    function submit(e) {
        e.preventDefault();
        setEmpty();

      
        // const logObj = { values };
        // const jsonObj = JSON.stringify(logObj);

        // fetch('http://localhost:5000/api/v1/login', {
        //     method: 'POST',
        //     body: jsonObj,
        //     headers: { 'Content-Type': 'application/json' }
        // })
        // .then((response) => response.json())
        // .then(response => {
        //         if (response.success) {

        //             appHistory.push("/dashboard");
        //             alert("Signup Successful");

        //         } else if (response.failure) {
            
        //             alert("Wrong Username or Password");
                
        //         } else if (response.goaway) {

        //             alert("Sorry user doesn't exist");

        //         }
        //     },
        //         (err) => console.log(err)
        //      );
        };
    
    return(
        <div className="bg-2">
            <NavBar/>
            <div className="w3-display-middle">
                <form className="w3-container w3-card-2 w3-round-large w3-light-grey w3-padding w3-animate-bottom form-size">
                    <header className="w3-container w3-padding"><h1 className="w3-center w3-margin">Welcome back!</h1></header>

                    <div className="w3-container">
                        <Inputs type="email" placeholder="Enter email" name="email" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Buttons text="Login" classname="w3-button w3-block w3-round-large w3-flat-wisteria w3-margin-top w3-margin-bottom w3-padding" onclick={submit}/>
                    </div>

                    <footer className="w3-container w3-center">
                        <p className="w3-small">Don't have an account? <Link to="/signup">Signup</Link></p>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default Login;