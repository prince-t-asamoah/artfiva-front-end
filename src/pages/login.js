import {useState} from 'react';
import {useAppContext} from '../context/_index';
import {Link, useHistory} from 'react-router-dom';

import {Button, Icon, Input, NavBar, TopBar} from '../components/_index';

function Login() {
    const [values, setValues] = useState({});
    const history = useHistory();
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
        <div className="bgIndigo" style={{height:'100vh'}}>
            <TopBar>
                <div className="floatR margR">
                    <span className="margR">Don't have an account?</span>
                    <Button classname="border large" click={()=>history.push("/signup")}>Sign up</Button>
                </div>
            </TopBar>
            {/* <NavBar/> */}
            <div className="disMid">
                <form className="box card4 round bgLightGrey pad32 formSize">
                    <header className="box padLg">
                        <h1 className="center margin">Login</h1>
                    </header>

                    <div className="box padLg">
                        <div className="inputBox margB round border">
                            <Icon type="envelope"/>
                            <Input type="email" text="Enter your email" name="email" classname="input border0" change={updateValues}/>
                        </div>

                        <div className="inputBox margB round border">
                            <Icon type="lock"/>
                            <Input type="password" text="Enter password" name="password" classname="input border0" change={updateValues}/>
                        </div>
                            <Button classname="disBlk margT margB padLg" click={submit}><b>Continue to account</b></Button>

                        <footer className="margT center bordT padMed">
                            <span className="padMed txtSm txtIndigo"><Link to="/reset">Forgot Password?</Link></span>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;