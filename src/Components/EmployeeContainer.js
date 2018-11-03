import React, { Component } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import EmployeeCard from './EmployeeCard'
import styled from 'styled-components'


const Container = styled.section.attrs({
    className: "cf"
})``

const Card = styled.div.attrs({
    className: "fl w-100 w-50-m w-25-l tc pv4"
})``

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
        return this.state.filteredEmp.map(employee => <Card key={employee.id}><EmployeeCard info={employee}/></Card>)
    }

    

    render() {
        return (
            <Container>
                {this.mapEmployees()}
            </Container>
        );
    }
}

export default EmployeeContainer;
