import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import styled from 'styled-components';
import UserSignUp from './components/SignUp/User_Sign_Up/UserSignUp'

const StyledApp = styled.div`
  color: #242943;
  text-align: center;
  background-color: #37a6cb;

`
const StyledAppNav = styled.nav`
  text-decoration: none;
  padding-bottom: 5%;
`

function App() {
  return (
    <StyledApp>
      <h1>ANYWHERE FITNESS</h1>

      <StyledAppNav>
        <Link to="/">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </StyledAppNav>

      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route path={"/sign-up"}>
          <UserSignUp />
        </Route>
      </Switch>

    </StyledApp>
  );
}

export default App;
