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

  render() {
    return (
      <div className="App">
        <Header />
        <EmployeeForm />
        <EmployeeContainer />
      </div>
    );
  }
}

export default App;
