import React, { Component, Fragment } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import EmployeeCard from './EmployeeCard'
import SearchForm from './SearchForm'
import styled from 'styled-components'


const Container = styled.section.attrs({
    className: "cf"
})``

const Card = styled.div.attrs({
    className: "fl w-100 w-50-m w-25-l tc pv4"
})``

const SearchContainer = styled.div.attrs({
    className: "flex justify-around"
})``

class EmployeeContainer extends Component {


    state = {
        filteredEmp: [],
        fullEmp: [],
        searchFilter:''
    }

    componentDidMount(){
        employeeAdapter.index().then(res => this.setState({
            fullEmp: res,
            filteredEmp: res
        }))
    }

    componentDidUpdate(){
        if (this.props.updateStatus===true){
            console.log('this updated!')
            this.props.resolveUpdate()
            employeeAdapter.index().then(res => this.setState({
                fullEmp: res,
                filteredEmp: res
            }))
        }
    }

    mapEmployees = () => {
        return this.state.filteredEmp.map(employee => <Card key={employee.id}><EmployeeCard info={employee}/></Card>)
    }

    searchFilter = (event) => {
        this.setState({
            searchFilter: event.target.value
        })
    }

    deptFilter = () => {

    }

    

    render() {
        return (
            <Fragment>
                <SearchContainer>
                    <SearchForm handleChange={this.searchFilter} />
                    <p>test</p>
                </SearchContainer>
                <Container>
                    {this.mapEmployees()}
                </Container>
            </Fragment>
        );
    }
}

export default EmployeeContainer;
