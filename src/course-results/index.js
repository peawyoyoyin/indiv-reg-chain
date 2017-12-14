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

const TopBarDiv = styled.div`
padding-top: 1em;
padding-bottom: 1em;
background-color: #A5E7F7;
margin-bottom: 1.5em;
margin: 0;
`

const TopBar = () => (
    <TopBarDiv>
        <span style={{ fontSize: '1.25em' }}>เข้าสู่ระบบลงทะเบียนเรียน</span>
    </TopBarDiv>
)

let subjects = [
    {
        id: '2110111',
        name: 'course 1',
        grade: 'ongoing'
    },
    {
        id: '2110545',
        name: 'course 2',
        grade: 'A'
    }
]

const ResultsTable = styled.table`
 border: 1px solid black;
 * {
     padding: 0.5em;
     border: 1px solid black;
 }
 th {
     background-color: darkturquoise;
 }
`

class CourseResultsPage extends Component {
    render() {
        let subjectoutput = subjects; //ใส่ function import ข้อมูล
        var outputList

        this.state.web3.eth.getAccounts((error, accounts) => {
            student.deployed().then((instance) => {
                student1Instance = instance
                student2Instance = instance
                if(this.props.id===5830000001){
                    outputList = student1Instance.getStudentSubjects.call()
                }
                if(this.props.id===5830000002){
                    outputList = student2Instance.getStudentSubjects.call()
                }
            })
          })

        return (
            <div style={{padding: '1.5em'}}>
                <span>{this.props.studentName || 'no name'} id: {this.props.id}</span>
                <ResultsTable>
                    <tr>
                        <th>Subject Id</th>
                        <th>Course Name</th>
                        <th>Grade</th>
                    </tr>
                    {
                        subjectoutput.map(subject => (
                            <tr>
                                <td>{subject.id}</td>
                                <td>{subject.name}</td>
                                <td>{subject.grade}</td>
                            </tr>
                        ))
                    }
                </ResultsTable>
                <span>{outputList}</span>
            </div>
        )
    }
}

export default CourseResultsPage
