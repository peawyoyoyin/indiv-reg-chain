import React, { Component } from 'react'

class AuthenticationBox extends Component {
    render() {
        return (
            <div style={{marginLeft: '5em', marginRight: '5em', marginTop: '2.5em', marginBottom: '2.5em', border: '1px solid black', padding: '1.5em'}}> 
                Authentication Box
                <br />
                <input placeholder="input authentication"/>
                <br />
                <button> Submit </button>
            </div>
        )
    }
}

export default AuthenticationBox
