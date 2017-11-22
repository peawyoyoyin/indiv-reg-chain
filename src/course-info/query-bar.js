import React, { Component } from 'react'
import styled from 'styled-components'

const QueryBarDiv = styled.div`
    padding: 1em;
    background-color: #97D9E8;
`

class CourseInfoQueryBar extends Component {
    render() {
        return (
            <QueryBarDiv>
               Insert Subject ID
               < br />
               <input placeholder="subject name" style={{marginRight: 5}}/> 
               <button> search </button>
            </QueryBarDiv>
        )
    }
}

export default CourseInfoQueryBar
