import React, { Component } from 'react'
import AuthenticationBox from './authentication'

const styles = {
    topBar: {
        paddingTop: '1em',
        paddingBottom: '1em',
        backgroundColor: '#A5E7F7',
        marginBottom: '1.5em'
    },
    loginInfoBox: {
        wrapper: {
            padding: '0.5em',
            backgroundColor: 'royalblue',
            margin: '2.5em',
            borderRadius: 5
        }
    }
}

const TopBar = () => (
    <div style={styles.topBar}>
        <span style={{fontSize: '1.25em'}}>เข้าสู่ระบบลงทะเบียนเรียน</span>
    </div>
)

const LoginInfoBox = () => (
    <div style={styles.loginInfoBox.wrapper}>
        <div>
            Hello
        </div>
        <hr style={{borderColor: 'white', borderWidth: 0, borderTopWidth: 3, opacity: '0.25', noshade: 'noshade'}}/>
        <div>
            Bye
        </div>
    </div>
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
