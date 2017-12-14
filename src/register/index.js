import React, { Component } from 'react'
import styled from 'styled-components'
import getWeb3 from './../utils/getWeb3'
import StudentContract from '../../build/contracts/Student.json'
import SubjectContract from '../../build/contracts/Subject.json'
import RegContract from '../../build/contracts/Reg.json'

const contract = require('truffle-contract')
const student = contract(StudentContract)
const subject = contract(SubjectContract)
const reg = contract(RegContract)
var student1Instance
var student2Instance
var subject1Instance
var subject2Instance
var regInstance
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
            this.state.web3.eth.getAccounts((error, accounts) => {
                reg.deployed().then((instance) => {
                  regInstance = instance
                  if(this.props.id===5830000001){
                      regInstance.registerStudentToSubject(accounts[0],this.subjectInput.value)
                  }
                  if(this.props.id===5830000002){
                      regInstance.registerStudentToSubject(accounts[1],this.subjectInput.value)
                  }
                })

                student.deployed().then((instance) => {
                    student1Instance = instance
                    student2Instance = instance
                    if(this.props.id===5830000001){
                        student1Instance.addSubject(this.subjectInput.value,{from: accounts[0]})
                    }
                    if(this.props.id===5830000002){
                        student2Instance.addSubject(this.subjectInput.value,{from: accounts[1]})
                    }
                })

                subject.deployed().then((instance) => {
                    subject1Instance = instance
                    subject2Instance = instance
                    if(this.props.id===5830000001){
                        if(this.subjectInput.value===1)subject1Instance.registerStudent(accounts[0],{from: accounts[2]})
                        if(this.subjectInput.value===2)subject2Instance.registerStudent(accounts[0],{from: accounts[3]})
                    }
                    if(this.props.id===5830000002){
                        if(this.subjectInput.value===1)subject1Instance.registerStudent(accounts[1],{from: accounts[2]})
                        if(this.subjectInput.value===2)subject2Instance.registerStudent(accounts[1],{from: accounts[3]})
                    }
                })

              })
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
