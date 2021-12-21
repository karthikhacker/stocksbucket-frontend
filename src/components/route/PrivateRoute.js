import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component, path, ...rest }) => {
    const token = localStorage.getItem('Access-Token');
    //console.log(token);
    return (
        token !== null ?
            <Route exact path={path} component={component} {...rest} />
            :
            <Redirect to="/signin" />
    )
}

export default PrivateRoute
