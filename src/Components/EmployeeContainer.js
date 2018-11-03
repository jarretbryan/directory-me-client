import React, { Component } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import EmployeeCard from './EmployeeCard'

class EmployeeContainer extends Component {


    state = {
        filteredEmp: [],
        fullEmp: []
    }

    componentDidMount(){
        employeeAdapter.index().then(res => this.setState({
            fullEmp: res,
            filteredEmp: res
        }))
    }

    mapEmployees = () => {
        return this.state.filteredEmp.map(employee => <EmployeeCard info={employee} key={employee.id} />)
    }

    

    render() {
        return (
            <div>
                <h1>Employees will go here!</h1>
                {this.mapEmployees()}
            </div>
        );
    }
}

export default EmployeeContainer;
