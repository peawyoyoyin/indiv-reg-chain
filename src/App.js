import React, { Component } from 'react'
import SideBar from './sidebar/index'
import LoginPage from './login/index'
import CourseInfoPage from './course-info/index'
import CourseResultsPage from './course-results/index'
import RegisterPage from './register/index'
import './index.css'
import { Route, Redirect } from 'react-router'
import getWeb3 from './utils/getWeb3'
import StudentContract from '../build/contracts/Student.json'
import SubjectContract from '../build/contracts/Subject.json'
import RegContract from '../build/contracts/Reg.json'

const contract = require('truffle-contract')
const student = contract(StudentContract)
const subject = contract(SubjectContract)
const reg = contract(RegContract)
var student1Instance
var student2Instance
var subject1Instance
var subject2Instance
var regInstance

const contentWrapperStyle = {
    marginLeft: '15%',
}

const ContentWrapper = ({children}) => (
    <div style={contentWrapperStyle}>
        {children}
    </div>
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            id: null,
            web3: null
        }
    }
    
    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.
        getWeb3
        .then(results => {
          this.setState({
            web3: results.web3
          })
    
          // Instantiate contract once web3 provided.
          this.instantiateContract()
        })
        .catch(() => {
          console.log('Error finding web3.')
        })
          // Instantiate contract once web3 provided.
    }

    instantiateContract() {
        student.setProvider(this.state.web3.currentProvider)
        subject.setProvider(this.state.web3.currentProvider)
        reg.setProvider(this.state.web3.currentProvider)
        
    
        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
          student.deployed().then((instance) => {
            student1Instance = instance
            student2Instance = instance
            student1Instance.Student({from: accounts[0]})
            student2Instance.Student({from: accounts[1]})
          })
          
          subject.deployed().then((instance) => {
            subject1Instance = instance
            subject2Instance = instance
            subject1Instance.Subject({from: accounts[2]})
            subject2Instance.Subject({from: accounts[3]})

            subject1Instance.setTeacher(accounts[2],{from: accounts[2]})
            subject1Instance.setOpenSeats(1,{from: accounts[2]})
            subject2Instance.setTeacher(accounts[3],{from: accounts[3]})
            subject2Instance.setOpenSeats(2,{from: accounts[3]})
          })

          reg.deployed().then((instance) => {
            regInstance = instance
            regInstance.Reg({from: accounts[4]})
            regInstance.registerSubject(1,1,accounts[2],{from: accounts[2]})
            regInstance.registerSubject(2,2,accounts[3],{from: accounts[3]})
            regInstance.registerStudent({from: accounts[0]})
            regInstance.registerStudent({from: accounts[1]})
          })
        })
      }

    render() {
        return (
            <div>
                <SideBar loggedIn={this.state.loggedIn}/>
                <ContentWrapper>
                    <Route exact path="/" render={() => (
                        this.state.loggedIn ? <span> Welcome {this.state.id} </span> : <LoginPage/>
                    )} />
                    <Route path="/courseinfo" component={CourseInfoPage}/>
                    <Route path="/loginsuccess/:userid" render={({match}) => {
                        if(!this.state.loggedIn) {
                            this.setState({loggedIn: true, id: match.params.userid})
                        }
                        return (
                            <Redirect to="/"/>
                        )
                    }}/>
                    <Route path="/logout" render={() => {
                        if(this.state.loggedIn) {
                            this.setState({loggedIn: false, id: null})
                        }
                        return (
                            <Redirect to="/"/>
                        )
                    }}/>
                    <Route path="/courseresults" render={() => {
                        if(!this.state.loggedIn) {
                            return (
                                <Redirect to="/"/>
                            )
                        }
                        return (
                            <CourseResultsPage id={this.state.id}/>
                        )
                    }}/>
                    <Route path="/register" render={() => {
                        if(!this.state.loggedIn) {
                            return (
                                <Redirect to="/"/>
                            )
                        }
                        return (
                            <RegisterPage id={this.state.id}/>
                        )
                    }}/>
                </ContentWrapper>
            </div>
        )
    }
}

export default App;
