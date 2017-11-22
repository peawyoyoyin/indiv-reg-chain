import React, { Component } from 'react'

const sideBarStyle = {
    backgroundColor: 'green',
    position: 'fixed',
    width: '15%',
    height: '100%'
}

class SideBar extends Component {
    render() {
        return (
            <div style={sideBarStyle}>
                <div style={{width: '100%', height: 200, backgroundColor: 'yellow', top: 0}}>
                    <h1 style={{ marginTop: 0 }}> Icon </h1>
                </div>
                <p> SideBar </p>
            </div>
        )
    }
}

export default SideBar
