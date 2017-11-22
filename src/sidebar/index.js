import React, { Component } from 'react'
import Logo from './logo.svg'

const sideBarStyle = {
    backgroundColor: '#A5E7F7',
    position: 'fixed',
    width: '15%',
    height: '100%'
}

class SideBar extends Component {
    render() {
        return (
            <div style={sideBarStyle}>
                <div style={{width: '100%', height: 200, backgroundColor: '#A5E7F7', top: 0}}>
                    <img src={Logo} style={{width: '100%', height: 150, marginTop: 15}}/>
                </div>
                <hr style={{borderWidth: 0, borderTopWidth: 1, marginLeft: '0.5em', marginRight: '0.5em'}}/>
                <p> SideBar </p>
            </div>
        )
    }
}

export default SideBar
