import {useState} from 'react';
import {useAppContext} from '../context/_index';
import {Link, useHistory} from 'react-router-dom';

import {Button, Input, NavBar} from '../components/_index';

function Login() {
    const [values, setValues] = useState({});
    // const history = useHistory();
    const {toFetch} = useAppContext();

    function updateValues(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function submit(e) {
        e.preventDefault();
        
          //Returns fetch url and init object
        let fetchObj = toFetch(values, "/login");
        console.log(fetchObj);

        // fetch(fetchObj.url, fetchObj.init)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         if (response.status === 1) {
        //             alert(response.message);
        //             history.push('/dashboard');

        //         } else if (response.status === 0){
        //             alert(response.message);

        //         } else {
        //             alert(response.message);
        //         }
        //     }, (error) => console.log(error));
    };
    
    return(
        <div className="bg-2">
            <NavBar/>
            <div className="w3-display-middle">
                <form className="w3-container w3-card-2 w3-round-large w3-light-grey w3-padding form-size">
                    <header className="w3-container w3-padding"><h1 className="w3-center w3-margin">Welcome back!</h1></header>

                    <div className="w3-container">
                        <Input type="email" placeholder="Enter email" name="email" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Input type="password" placeholder="Enter password" name="password" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Button text="Login" classname="w3-button w3-block w3-round-large w3-flat-wisteria w3-margin-top w3-margin-bottom w3-padding" onclick={submit}/>
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