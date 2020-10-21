import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp/Sign_Up_Page'
import styled from 'styled-components';

const StyledApp = styled.div`
  color: #242943;
  text-align: center;
  background-color: #37a6cb;

`
const StyledAppNav = styled.nav`
  text-decoration: none;
  padding-bottom: 5%;
`

const StyledAppCopyright = styled.p`
  color: #ffff;
  line-height: normal;
  padding: 2%;
  font-family: 'Sans Source Pro';
  margin: 0;
`

function App() {
  return (
    <StyledApp>
      <h1 class="headerTitle">ANYWHERE FITNESS</h1>
      <StyledAppNav>
        <Link to="/">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </StyledAppNav>

      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route path={"/sign-up"}>
          <SignUp />
        </Route>
      </Switch>
    <StyledAppCopyright>Created by Sam Lalli, Rees Harper, and Jennifer Kramer
      <br/>
      <br/>
      Anywhere Fitness © 2020
      <br/>
      All Rights Reserved
    </StyledAppCopyright>
    </StyledApp>
  );
}

export default App;
