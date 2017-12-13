import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

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

const authenticateSuccess = (text) => {
    return text === '5830000001' | text === '5830000002';
}

class AuthenticationBoxUI extends Component {
    constructor() {
        super()
        this.handleAuthenticationSubmit = this.handleAuthenticationSubmit.bind(this);
    }
    
    handleAuthenticationSubmit() {
        if(authenticateSuccess(this.textInput.value)) {
            this.props.history.push('/loginsuccess/'+this.textInput.value);
        }
    }

    render() {
        return (
            <AuthenticationBoxWrapper>
                Authentication Box
                <br />
                <input placeholder="input authentication" ref={input => {this.textInput = input}}/>
                <br />
                <button onClick={this.handleAuthenticationSubmit}> Submit </button>
            </AuthenticationBoxWrapper>
        )
    }
}

const AuthenticationBox = withRouter(AuthenticationBoxUI);

export default AuthenticationBox
