import React, { Component } from 'react'
import styled from 'styled-components'

class RegisterPage extends Component {
    constructor() {
        super()
        this.handleAddSubject = this.handleAddSubject.bind(this)
        this.handleRemoveSubject = this.handleRemoveSubject.bind(this)
        this.state = {
            subjects: []
        }
    }

    handleAddSubject() {
        if(this.state.subjects.indexOf(this.subjectInput.value) == -1) {
            this.setState({
                subjects: [...this.state.subjects, this.subjectInput.value]
            });
        }
        this.subjectInput.value = ''
    }

    handleRemoveSubject(index) {
        this.setState({
            subjects: [
                ...this.state.subjects.slice(0, index),
                ...this.state.subjects.slice(index+1)
            ]
        })
    }

    render() {
        const { subjects } = this.state
        return (
            <div style={{padding: '2em'}}>
                <span> register page  id: {this.props.id}</span>
                <ul>
                    {
                        subjects.length > 0 ?
                        subjects.map((subject, index) => (
                            <li key={subject}>
                                {subject}
                                <a onClick={() => this.handleRemoveSubject(index)}> X </a>
                            </li>
                        ))
                        : <span> no subjects in queue </span>
                    }
                </ul>
                <input placeholder="insert subject name" ref={input => {this.subjectInput = input}}/>
                <button onClick={this.handleAddSubject}>Add Subject</button>

            </div>
        )
    }
}

export default RegisterPage
