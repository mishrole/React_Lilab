import { Redirect, Switch, Route } from 'react-router-dom';
import { MainContextProvider } from '../context/mainContext';
import { CategoryGridPage } from '../pages/_home/CategoryGridPage';
import { ProductGridPage } from '../pages/_product/ProductGridPage';

const Root = () => {
    return (
        <MainContextProvider>
            <Switch>
                <Route path="/home" component={ CategoryGridPage } />
                <Route path="/category/:categoryId" component={ ProductGridPage } />
                <Redirect from="/" to="/home" />
            </Switch>
        </MainContextProvider>
    )
}

export default Root;