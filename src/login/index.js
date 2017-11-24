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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam suscipit officiis ea eligendi quaerat, nulla explicabo asperiores laborum eaque aperiam, mollitia ab ad maiores? Consequatur alias voluptate facilis repellendus obcaecati.
            Ullam libero fuga voluptates voluptatem debitis praesentium laudantium sunt sit obcaecati minima voluptatum similique labore accusamus delectus, eum doloribus. Quaerat voluptate quod sint libero eveniet dolore dolorum quisquam aliquid animi!
            Nobis eveniet fugiat doloremque sit hic labore ea cumque provident corporis, id dolores fuga voluptatibus repudiandae debitis corrupti nulla ipsa itaque reiciendis porro molestias harum ipsum! Perspiciatis ipsum consequatur iure!
        </LoginInfoContentDiv>
        <hr style={{borderColor: 'white', borderWidth: 0, borderTopWidth: 3, opacity: '0.25', noshade: 'noshade'}}/>
        <LoginInfoContentDiv>
            Veritatis repellendus cum eius, rerum ab quibusdam eum, saepe alias quas quos hic excepturi? Similique qui quisquam doloremque ad odit quae omnis, mollitia neque nesciunt aspernatur consequuntur doloribus nihil corporis!
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
