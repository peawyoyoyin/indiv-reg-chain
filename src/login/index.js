import React, { Component } from 'react'
import AuthenticationBox from './authentication'
import styled from 'styled-components'

const TopBarDiv = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: #A5E7F7;
    margin-bottom: 1.5em;
    margin: 0;
`

const TopBar = () => (
    <TopBarDiv>
        <span style={{fontSize: '1.25em'}}>เข้าสู่ระบบลงทะเบียนเรียน</span>
    </TopBarDiv>
)

const LoginInfoBoxDiv = styled.div`
    padding: 1em;
    background-color: royalblue;
    margin: 1.5em 0em 3em 9em;
    border-radius: 5px;
    width: 65%;
`

const LoginInfoContentDiv = styled.div`
    padding: 1em;
`

const LoginInfoBox = () => (
    <LoginInfoBoxDiv>
        <LoginInfoContentDiv>
        ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนเรียน
        </LoginInfoContentDiv>
        <hr style={{borderColor: 'white', borderWidth: 0, borderTopWidth: 3, opacity: '0.25', noshade: 'noshade'}}/>
        <LoginInfoContentDiv>
        student1 = 5830000001
        student2 = 5830000002
        subject1 = 1
        subject2 = 2
        </LoginInfoContentDiv>
    </LoginInfoBoxDiv>
)

class LoginPage extends Component {
    render() {
        return (
            <div>
                < TopBar />
                < LoginInfoBox />
                < AuthenticationBox />
            </div>
        )
    }
}

export default LoginPage
