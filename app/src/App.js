import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import styled from 'styled-components';
import UserSignUp from './components/SignUp/User_Sign_Up/UserSignUp'
import PrivateRoute from './components/PrivateRoute';
import ProtectedPage from './components/ProtectedPage';

// Styled Components Start //

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
  margin: auto;

  @media (max-width: 375px) {
    padding: 5%;
    width: 80%;
  }
`

// Styled Components End //

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
          {/* <Login /> */}
          <ProtectedPage />
        </Route>
        <Route path={"/sign-up"}>
          <UserSignUp />
        </Route>
        <PrivateRoute path={'/protected-page'} component={ProtectedPage} />
      </Switch>
    <StyledAppCopyright>Created by Sam Lalli, Rees Harper, & Jennifer Kramer
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
