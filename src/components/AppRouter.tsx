import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from './Home';
import MenuDetails from './MenuDetails';
import NotFoundPage from './NotFoundPage';


function AppRouter(props:object){

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/details/:id" component={MenuDetails}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
} 

export default AppRouter;