import {Switch,Route} from 'react-router-dom';
import DefaultView from './overview';

function ViewRouter() {
    return (
        <Switch>
            <Route exact path="/default" component={DefaultView} />
        </Switch>
    );
};

export default ViewRouter;