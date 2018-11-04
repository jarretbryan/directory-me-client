import React, { Component } from 'react';
import DeptAdapter from '../api/DeptAdapter'
import styled from 'styled-components'


const Form = styled.form.attrs({
    className: "pa4 black-80"
})``

class DeptDropdown extends Component {

    state = {
        list: []
    }

    componentDidMount(){
        DeptAdapter.index().then(res => this.setState({
            list: res
        }))
    }

    mapOptions = () => {
        return this.state.list.map(obj => <option value={obj.id}>{obj.name}</option>)
    }

    render() {
        return (
            <Form>
                <label htmlFor="dept-drop">Filter by Dept</label><br />
                <select id="dept-drop" onChange={this.props.handleDrop}>
                    <option value="" selected disabled hidden >Choose here</option>
                    <option value="0">All Departments</option>
                    {this.mapOptions()}
                </select>
            </Form>
        );
    }
}

export default DeptDropdown;
