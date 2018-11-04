import React, { Component, Fragment } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import EmployeeCard from './EmployeeCard'
import SearchForm from './SearchForm'
import DeptDropdown from './DeptDropdown'
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
        searchFilter:'',
        deptVal: "0"
    }

    componentDidMount(){
        employeeAdapter.index().then(res => this.setState({
            filteredEmp: res
        }))
    }

    componentDidUpdate(){
        if (this.props.updateStatus===true){
            console.log('this updated!')
            this.props.resolveUpdate()
            employeeAdapter.index().then(res => this.setState({
                filteredEmp: res
            }))
        }
    }

    mapEmployees = (array) => {
        return array.map(employee => <Card key={employee.id}><EmployeeCard info={employee}/></Card>)
    }

    searchFilter = (event) => {
        this.setState({
            searchFilter: event.target.value
        })
    }

    deptFilter = (event) => {
        this.setState({
            deptVal: event.target.value
        })
    }

    render() {

        let bios = this.state.filteredEmp
        if (this.state.searchFilter.length > 0){
            bios = bios.filter((person) => person.name.toLowerCase().match(this.state.searchFilter.toLocaleLowerCase().trim()))
        }

        if (this.state.deptVal !== "0"){
            bios = bios.filter(person => person.department.id.toString().match(this.state.deptVal))
        }

        return (
            <Fragment>
                <SearchContainer>
                    <SearchForm handleChange={this.searchFilter} />
                    <DeptDropdown handleDrop={(e) => this.deptFilter(e)}/>
                </SearchContainer>
                <Container>
                    {this.mapEmployees(bios)}
                </Container>
            </Fragment>
        );
    }
}

export default EmployeeContainer;
