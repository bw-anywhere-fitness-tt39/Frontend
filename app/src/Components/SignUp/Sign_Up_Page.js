import React from 'react';
import UserSignUp from './User_Sign_Up/UserSignUp';
import InstructorSignUp from './Instructor_Sign_Up/InstructorSignUp';
import styled from 'styled-components';

const StyledSignUp = styled.div`

color: black;

`

export default function SignUp() {

  return(

    <StyledSignUp>
      <UserSignUp />
      <InstructorSignUp />
    </StyledSignUp>

  );
}