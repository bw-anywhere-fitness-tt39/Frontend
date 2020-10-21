import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './Components/Login'
import SignUp from './Components/SignUp/Sign_Up_Page'
import styled from 'styled-components';

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
          <SignUp />
        </Route>
      </Switch>

    </StyledApp>
  );
}

export default App;
