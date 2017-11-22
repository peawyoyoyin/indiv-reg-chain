import React, { Component } from 'react'
import Logo from './logo.svg'
import styled from 'styled-components'

const sideBarStyle = {
    backgroundColor: '#A5E7F7',
    position: 'fixed',
    width: '13%',
    height: '100%', 
    paddingLeft: '1%', 
    paddingRight: '1%'
}

const MenuULWrapper = styled.ul`
    list-style-type: none;
`

class SideBar extends Component {
    render() {
        return (
            <div style={sideBarStyle}>
                <div style={{width: '100%', height: 200, backgroundColor: '#A5E7F7', top: 0}}>
                    <img src={Logo} style={{width: '100%', height: 150, marginTop: 15}}/>
                </div>
                <hr style={{borderWidth: 0, borderTopWidth: 1}}/>
                <MenuULWrapper>
                    <li>
                        <a href="#"> Hello </a>
                    </li>
                    <li>
                        <a href="#"> Hello </a>
                    </li>
                    <li>
                        <a href="#"> Hello </a>
                    </li>
                </MenuULWrapper>
            </div>
        )
    }
}

export default SideBar
