import React, { Component } from 'react';
import EmployeeContainer from './Components/EmployeeContainer'
import Header from './Components/Header'
import EmployeeForm from './Components/EmployeeForm'
import DeptForm from './Components/DeptForm.js'

// import './App.css';

// I have state at the top level app here: Not using Redux because I think the app is simple enough that it doesn't require it.
class App extends Component {

  state = {
    addingEmployee: false,
    addingDept: false,
    justUpdated: false
  }

  // these next four methods could be consolidated into 2
  showEmployeeForm = () => {
    console.log(this)
    this.setState({
      addingEmployee:true
    })
  }

  hideEmployeeForm = () => {
    this.setState({
      addingEmployee: false,
      justUpdated: true
    })
  }

  showDeptForm = () => {
    this.setState({
      addingDept: true
    })
  }

  hideDeptForm = () => {
    this.setState({
      addingDept: false,
      justUpdated: true
    })
  }

  renderEmpForm = () =>{
    if (this.state.addingEmployee === true){
      return (<EmployeeForm formFn={this.hideEmployeeForm} />) 
    } else {
      return null
    }
  }

  renderDeptForm = () => {
    if (this.state.addingDept === true) {
      return (<DeptForm formFn={this.hideDeptForm} />)
    } else {
      return null
    }
  }

  resolveUpdate = () => {
    this.setState({
      justUpdated: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header addEmp={this.showEmployeeForm} addDept={this.showDeptForm} />
        {this.renderEmpForm()}
        {this.renderDeptForm()}
        <EmployeeContainer updateStatus={this.state.justUpdated} resolveUpdate={this.resolveUpdate} />
      </div>
    );
  }
}

export default App;
