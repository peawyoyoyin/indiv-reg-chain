import React, { Component } from 'react'
import AuthenticationBox from './authentication'
import styled from 'styled-components'


const styles = {
    topBar: {
        paddingTop: '1em',
        paddingBottom: '1em',
        backgroundColor: '#A5E7F7',
        marginBottom: '1.5em'
    }
}

const TopBar = () => (
    <div style={styles.topBar}>
        <span style={{fontSize: '1.25em'}}>เข้าสู่ระบบลงทะเบียนเรียน</span>
    </div>
)

const LoginInfoBoxDiv = styled.div`
    padding: 0.5em;
    background-color: royalblue;
    margin: 2.5em;
    border-radius: 5px;
`

const LoginInfoBox = () => (
    <LoginInfoBoxDiv>
        <div>
            Hello
        </div>
        <hr style={{borderColor: 'white', borderWidth: 0, borderTopWidth: 3, opacity: '0.25', noshade: 'noshade'}}/>
        <div>
            Bye
        </div>
    </LoginInfoBoxDiv>
)

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div>
                    < TopBar />
                    < LoginInfoBox />
                    < AuthenticationBox />
                </div>
            </div>
        )
    }
}

export default LoginPage
