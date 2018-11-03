import React, { Component } from 'react';
import EmployeeContainer from './Components/EmployeeContainer'
import Header from './Components/Header'
import EmployeeForm from './Components/EmployeeForm'

// import './App.css';

// I have state at the top level app here: Not using Redux because I think the app is simple enough that it doesn't require it.
class App extends Component {

  state = {
    addingEmployee: false,
    addingDept: false
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
      addingEmployee: false
    })
  }

  showDeptForm = () => {
    this.setState({
      addingDept: true
    })
  }

  hideDeptForm = () => {
    this.setState({
      addingDept: false
    })
  }

  renderEmpForm = () =>{
    if (this.state.addingEmployee === true){
      return (<EmployeeForm formFn={this.hideEmployeeForm} />) 
    } else {
      return null
    }
  }



  render() {
    return (
      <div className="App">
        <Header formFn={this.showEmployeeForm} />
        {this.renderEmpForm()}
        <EmployeeContainer />
      </div>
    );
  }
}

export default App;
