import React, { Component } from 'react';
import EmployeeContainer from './Components/EmployeeContainer'
import Header from './Components/Header'

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EmployeeContainer />
      </div>
    );
  }
}

export default App;
