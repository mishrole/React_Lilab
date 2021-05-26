import { Redirect, Switch, Route } from 'react-router-dom';
import { MainContextProvider } from '../context/mainContext';
import { CategoryGridPage } from '../pages/_home';
import { ProductGridPage } from '../pages/_product';

const Root = () => {
    return (
        <MainContextProvider>
            <Switch>
                <Route path="/home" component={ CategoryGridPage } />
                <Route path="/product/:productId" component={ ProductGridPage } />
                <Redirect from="/" to="/home" />
            </Switch>
        </MainContextProvider>
    )
}

export default Root;