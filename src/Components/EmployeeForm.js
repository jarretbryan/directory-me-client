import React, { Component } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import DeptDropdown from './DeptDropdown'
import styled, { css } from 'styled-components'


//styling

const Form = styled.form.attrs({
    className: "pa4 black-80"
})``

const Measure = styled.div.attrs({
    className: "measure"
})``

const Label = styled.label.attrs({
    className: "f6 b db mb2"
})``

const Input = styled.input.attrs({
    className: "input-reset ba b--black-20 pa2 mb2 db w-100",
    type: "text"
})``

const Button = styled.p.attrs({
    className: "f6 link dim br-pill ph3 pv2 mb2 dib white"
})`
    background: blue
    margin: 1em;

    ${props => props.primary && css`
    background: red;
    color: white;
  `}
`



class EmployeeForm extends Component {

    state = {
        name: '',
        title: '',
        location: '',
        direct: '',
        office: '',
        department_id: 1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        employeeAdapter.create(this.state).then(res => {
            console.log(res)
            this.props.formFn()
        })
    }

    deptFilter = (event) => {
        this.setState({
            department_id: parseInt(event.target.value)
        })
    }


    render() {
        return (
            <Form onChange={this.handleChange}>
                <Measure>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" aria-describedby="name-desc" />
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" type="text" aria-describedby="title-desc" />
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" type="text" aria-describedby="location-desc" />
                    <Label htmlFor="direct">Direct Line</Label>
                    <Input id="direct" name="direct" type="text" aria-describedby="direct-desc" />
                    <Label htmlFor="office">Office</Label>
                    <Input id="office" name="office" type="text" aria-describedby="office-desc" />
                    <DeptDropdown isRequired={true} handleDrop={(e) => this.deptFilter(e)} />

                    <Button onClick={this.handleSubmit}> Add</Button>

                    <Button primary onClick={this.props.formFn}>Close</Button>

                </Measure>
            </Form>
        );
    }
}

export default EmployeeForm;
