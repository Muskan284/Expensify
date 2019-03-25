import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import {startlogout} from '../action/auth';
import {connect} from 'react-redux';

export const Header = ({startlogout}) => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/dashboard"  activeClassName="is-active" exact="true">Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={startlogout} >Log out</button>
    </div>
)

const mapsDispatchToProps= (dispatch) => ({
    startlogout: () => dispatch(startlogout())
})

export default connect(undefined,mapsDispatchToProps)(Header);