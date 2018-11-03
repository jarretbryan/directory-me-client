import React, { Component } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'

class EmployeeContainer extends Component {


    state = {
        initialEmp: [],
        filteredEmp: [],
        fullEmp: []
    }

    componentDidMount(){
        employeeAdapter.index().then(console.log)
    }

    

    render() {
        return (
            <div>
                <h1>Employees will go here!</h1>
            </div>
        );
    }
}

export default EmployeeContainer;
