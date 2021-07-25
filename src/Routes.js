import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Clientes from './Clients';
import Produtos from './Products';
import Home from './Home';

const Routes=() => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Clients">
                <Clientes/>
            </Route>
            <Route exact path="/Products">
                <Produtos/>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;