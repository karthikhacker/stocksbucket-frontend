import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from './actions/authAction';
import './App.css';
import Navigation from './components/Navigation';
import Signin from './components/auth/Signin';
import Watchlists from './components/watchlist/Watchlists';
import CreateWatchlist from './components/watchlist/CreateWatchlist';
import AssetDetails from './components/watchlist/AssetDetails';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/account/CreateAccount';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/route/PrivateRoute';




function App() {
  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  const { isAuthenticated } = authData;
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(isLoggedIn())
    }

  }, [])
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/watchlist" component={Watchlists} />
        <PrivateRoute exact path="/create/watchlist" component={CreateWatchlist} />
        <PrivateRoute exact path="/asset/details/:id" component={AssetDetails} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/create/account" component={CreateAccount} />
      </Switch>
    </div>
  );
}

export default App;
