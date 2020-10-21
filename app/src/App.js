import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './Components/Login'
import styled from 'styled-components';
import UserSignUp from './Components/SignUp/User_Sign_Up/UserSignUp'

const StyledApp = styled.div`

color: black;
text-align: center;

`


function App() {
  return (
    <StyledApp>
      <h1>Anywhere Fitness</h1>

      <nav>
        <Link to="/">Login</Link>
        <br />
        <Link to="/sign-up">Sign Up</Link>
      </nav>

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
