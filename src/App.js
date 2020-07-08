import React from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Register from './pages/register'
import Login from './pages/login'
import SiderBar from './pages/index'
const App = () =>{
    return (
          <div className="app">
            <Router>
              <Switch>
                <Route exact path="/" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/index" component={SiderBar}></Route>
                <Redirect from="/" to="/" />
              </Switch>
          </Router>
          </div>
    );
}

export default App