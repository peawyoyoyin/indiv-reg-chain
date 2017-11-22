import React, { Component } from 'react'
import styled from 'styled-components'
import CourseInfoQueryBar from './query-bar'
import { Route } from 'react-router-dom'

const TopBarDiv = styled.div`
padding-top: 1em;
padding-bottom: 1em;
background-color: #A5E7F7;
margin-bottom: 1.5em;
margin: 0;
`

const TopBar = () => (
<TopBarDiv>
    <span style={{fontSize: '1.25em'}}>ข้อมูลรายวิชา</span>
</TopBarDiv>
)

const Hello = () => (
    <p> Hello </p>
)

const Results = () => (
    <p> Results </p>
)

class CourseInfoPage extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                < TopBar />
                < CourseInfoQueryBar />
                Course Info Page
                <Route exact path={`${match.url}`} component={Hello}/>
                <Route path={`${match.url}/results`} component={Results}/>
            </div>
        )
    }
}

export default CourseInfoPage
