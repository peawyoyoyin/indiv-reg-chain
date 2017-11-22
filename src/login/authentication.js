import React, { Component } from 'react'
import styled from 'styled-components'

const AuthenticationBoxWrapper = styled.div`
    margin-left: 9em;
    margin-right: 0em;
    margin-top: 2.5em;
    margin-bottom: 2.5em;
    border: 1px solid black;
    padding: 1em;
    text-align: center;
    width: 65%;
`

class AuthenticationBox extends Component {
    render() {
        return (
            <AuthenticationBoxWrapper>
                Authentication Box
                <br />
                <input placeholder="input authentication"/>
                <br />
                <button> Submit </button>
            </AuthenticationBoxWrapper>
        )
    }
}

export default AuthenticationBox
