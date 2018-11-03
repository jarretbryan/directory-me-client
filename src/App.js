import React, { Component } from 'react';
import EmployeeContainer from './Components/EmployeeContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            DirectorMe: Employee Directory Site
          </p>
        </header>
        <p>TEST</p>
        <EmployeeContainer />
      </div>
    );
  }
}

export default App;
