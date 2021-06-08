import {useState} from 'react';
import {useAppContext} from '../context/_index';
import {Link, useHistory} from 'react-router-dom';

import {Button, Input, NavBar} from '../components/_index';

function Signup() {
    const [values, setValues] = useState({});
    const history = useHistory();
    const {toFetch, samePass} = useAppContext();

    function updateValues(e) {
        setValues({...values, [e.target.name]:e.target.value});
    }
    
    function submit(e) {
        e.preventDefault();

        //Check if password is same
        let checkPass = samePass(values);
        alert(checkPass.msg);

        //Returns fetch url and init object
        let fetchObj = toFetch(values, "/signup");
        // console.log(fetchObj);

        fetch(fetchObj.url, fetchObj.init)
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                alert(response.message);
                history.push('/login');
            }
            else {
                alert(response.message)
            }
        }, (error) => console.log(error));
    }

    return(
        <div className="bg-2 indigo">
            <NavBar />
            <div className="display-middle">
                <form className="container card-2 round-large light-grey padding form-size">
                    <header className="container padding"><h1 className="center margin">Sign Up</h1></header>

                    <div className="container">
                        <Input type="text" text="Enter full name" name="fullname" classname="input" change={updateValues}/>
                        <Input type="email" text="Enter email" name="email" classname="input" change={updateValues}/>
                        <Input type="password" text="Enter password" name="password" classname="input" change={updateValues}/>
                        <Input type="password" text="Confirm password" name="cpassword" classname="input" change={updateValues}/>
                        <Button classname="block margin-top padding" click={submit}>Create account</Button>
                    </div>

                    <footer className="container center">
                        <p className="small">Already a member? <Link to="/login">Login</Link></p>
                        <p className="tiny">By clicking the button above, you agree to our <Link to="/login">Terms of Service</Link> and <Link>Privacy Policy</Link>.</p>
                    </footer>
                </form>
            </div>
        </div>
         ) 
    };
export default Signup;