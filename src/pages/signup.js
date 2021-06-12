import {useState} from 'react';
import {useAppContext} from '../context/_index';
import {Link, useHistory} from 'react-router-dom';

import {Button, Icon, Input, TopBar} from '../components/_index';

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
        <div className="bgIndigo" style={{height:'100vh'}}>
            <TopBar>
                <div className="floatR margR">
                    <span className="margR">Already have an account?</span>
                    <Button classname="border" click={()=>history.push("/login")}>Login</Button>
                </div>
            </TopBar>
            {/* <NavBar /> */}
            <div className="disMid">
                <form className="box card4 roundLg bgLightGrey formSize">
                    <header className="box padLg">
                        <h1 className="center margin">Sign Up</h1>
                    </header>

                    <div className="box padLg">
                        <div className="inputBox border margB round">
                            <Icon type="user" classname=""/>
                            <Input type="text" text="Enter full name" name="fullname" classname="input bord0" change={updateValues}/>
                        </div>

                        <div className="inputBox border margB round">
                            <Icon type="envelope" classname=""/>
                            <Input type="email" text="Enter your email" name="email" classname="input bord0" change={updateValues}/>
                        </div>

                        <div className="inputBox border margB round">
                            <Icon type="lock" classname=""/>
                            <Input type="password" text="Enter password" name="password" classname="input bord0" change={updateValues}/>
                        </div>

                        <div className="inputBox border margB round">
                            <Icon type="lock" classname=""/>
                            <Input type="password" text="Confirm password" name="cpassword" classname="input bord0" change={updateValues}/>
                        </div>

                        <Button classname="disBlk margT padLg margB" click={submit}><b>Create account</b></Button>
                    </div>

                    <footer className="center margT bordT padMed">
                        <span className="txtSm padMed txtIndigo">
                            By clicking the button above, you agree to our <Link to="#">Terms of Service </Link>
                            and <Link to="#">Privacy Policy</Link>.
                        </span>
                    </footer>
                </form>
            </div>
        </div>
         ) 
    };
export default Signup;