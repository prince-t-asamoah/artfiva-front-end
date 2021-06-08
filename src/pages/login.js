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
        <div className="bg-2 indigo">
            <NavBar/>
            <div className="display-middle">
                <form className="container card-2 round-large light-grey padding form-size">
                    <header className="container padding"><h1 className="center margin">Login</h1></header>

                    <div className="container">
                        <Input type="email" text="Enter email" name="email" classname="input" change={updateValues}/>
                        <Input type="password" text="Enter password" name="password" classname="input" change={updateValues}/>
                        <Button classname="block margin-top margin-bottom padding" click={submit}>Continue to account</Button>
                    </div>

                    <footer className="container center">
                        <p className="small">Don't have an account? <Link to="/signup">Signup</Link></p>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default Login;