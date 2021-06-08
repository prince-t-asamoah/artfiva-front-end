import {useAppContext} from '../context/_index';

import {Button,NavBar} from '../components/_index';

// import Footer from '../../components/Footer/footer';
// import Logo from '../../img/logo.png';

function Landing() {
    const {toHistory} = useAppContext();
    
    return(
        <div className="bg-1">
            <header>
                <NavBar/>

                <div className="container center text-white animate-top hero-section">
                    <h1 className="jumbo f-w">Manage an artiste in one app.</h1>
                    <h2 className="xlarge">Brand development, marketing, budgeting and accounting, touring etc.</h2>
                    <Button classname="margin-top padding f-w" size="xlarge" click={()=>toHistory.push("/signup")}>
                        Get Started!
                    </Button>
                </div>
            </header>   

        </div>
    );
};

export default Landing;