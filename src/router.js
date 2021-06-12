import {Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import ResetPass from './pages/reset';

function AppRouter() {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reset" component={ResetPass} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default AppRouter;