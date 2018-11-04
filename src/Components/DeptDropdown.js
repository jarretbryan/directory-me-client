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

    componentDidUpdate(){
        if (this.props.updateStatus===true && !!this.props.updateStatus){
            console.log('dept updated!')
            this.props.resolveUpdate()
            DeptAdapter.index().then(res => this.setState({
                list: res
            }))
        }
    }

    mapOptions = () => {
        return this.state.list.map(obj => <option key={obj.id} value={obj.id}>{obj.name}</option>)
    }

    handleRequirement = () => {
        if (this.props.isRequired === false){
            return <option value="0">All Departments</option>
        }
    }

    render() {
        return (
            <Form>
                <label htmlFor="dept-drop">Choose a Dept</label><br />
                <select id="dept-drop" onChange={this.props.handleDrop}>
                    {this.handleRequirement()}
                    {this.mapOptions()}
                </select>
            </Form>
        );
    }
}

export default DeptDropdown;
