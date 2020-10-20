import React from 'react';
import styled, { keyframes } from 'styled-components';
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic");

const StyledLogin = styled.div`
    opacity: 0;
    animation: ${keyframes} 0.5s ease-in-out;

    color: white;
    background-color: orange;
`

export default function Styles() {

    return (
        <StyledLogin>

        </StyledLogin>
    )
}