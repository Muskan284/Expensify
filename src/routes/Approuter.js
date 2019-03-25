import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Notfound from '../components/NotfoundPage';
import Helppage from '../components/Helppage.js';
import Expensepage from '../components/Expensepage.js';
import Editexpensepage from '../components/Editexpensepage';
import Addexpensepage from '../components/Addexpensepage';
import Editexpenseitem from '../components/Editexpenseitem';
import Loginpage from '../components/Loginpage';
import Privateroute from './Privateroute';
import Publicroute from './Publicroute'

export const history=createHistory();

const Approuter = () => (
    <div>
    <Router history={history}>
       <div>
          <Switch>
          <Publicroute path='/' component={Loginpage} exact='true'/>
          <Privateroute path="/dashboard" component={Expensepage} exact="true" />
          <Privateroute path="/create" component={Addexpensepage} exact="true" />
          <Privateroute path="/edit" component={Editexpensepage} exact="true" />
          <Route path="/help" component={Helppage} exact="true" ></Route>
          <Route path="/edit/:id" component={Editexpenseitem} ></Route>
          <Route component={Notfound} ></Route>
          </Switch>
       </div>
    </Router>
    </div>
)


export default Approuter;