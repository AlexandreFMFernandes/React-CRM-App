import React, { useContext } from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

/* */ 
import Website from './website/website'
import Login from './app/Login/login'
import NewAccount from './app/New Account/new-account'
import ResetPassword from './app/Reset password/reset-password'
import Home from './app/Home/home'
import NewUser from './app/New User/new-user'
import EditUser from './app/EditUser/edit-user'
import { AuthContext } from './app/Context/auth'


function App(){

    const {logged} = useContext(AuthContext);

    function SecureRoute({...params}) {
      if (logged === false) {
        return <Redirect to= '/app'/>
      } else {
          return <Route {...params} />
      }
    }



    return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Website}/>
    <Route exact path='/app' component={Login}/>
    <Route exact path='/app/new-account' component={NewAccount}/>
    <Route exact path='/app/reset-password' component={ResetPassword}/>
    
    <SecureRoute exact path='/app/home' component={Home}/>
    <SecureRoute exact path='/app/new-user' component={NewUser}/>
    <SecureRoute exact path='/app/edit-user/:id' component={EditUser}/>
    </Switch>
    </BrowserRouter>
    )
  }


  export default App;