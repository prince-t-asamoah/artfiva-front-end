import {useHistory} from 'react-router-dom';
// import {useAppContext} from '../context/_index';


import {Button,NavBar, TopBar} from '../components/_index';

// import Footer from '../../components/Footer/footer';
// import Logo from '../../img/logo.png';

function Landing() {
    const history = useHistory();
    
    return(
        <div className="bgIndigo" style={{height:'100vh'}}>
            <header>
                {/* <NavBar/> */}
                <TopBar>
                    <nav class="right">
                        <Button className="barItem ripple" click={()=>history.push("/login")}>Login</Button>
                        <Button classname="barItem ripple border borderWhite" click={()=>history.push("/signup")}>Sign up</Button>
                    </nav>
                </TopBar>
                {/* <div className="container center text-white animate-top hero-section">
                    <h1 className="jumbo f-w">Manage an artiste in one app.</h1>
                    <h2 className="xlarge">Brand development, marketing, budgeting and accounting, touring etc.</h2>
                    <Button classname="margin-top padding f-w" size="xlarge" click={()=>toHistory.push("/signup")}>
                        Get Started!
                    </Button>
                </div> */}
            </header>   

        </div>
    );
};

export default Landing;