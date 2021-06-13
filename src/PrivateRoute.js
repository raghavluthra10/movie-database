import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { userState } from './firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route 
        // {...rest} 
        // render={props => userState() ? <Component {...props} /> : <Redirect to='/'  />}

            
            >

        </Route>
    )
};

export default PrivateRoute;