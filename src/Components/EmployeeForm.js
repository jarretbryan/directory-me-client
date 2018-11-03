import React, { Component } from 'react';
import employeeAdapter from '../api/EmployeeAdapter'
import styled from 'styled-components'


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



class EmployeeForm extends Component {

    state = {
        name: '',
        title: '',
        location: '',
        direct: '',
        office: '',
        department_id: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        employeeAdapter.create(this.state)
    }



    render() {
        return (
            <Form>
                <Measure>
                    <Label for="name">Name</Label>
                    <Input id="name" type="text" aria-describedby="name-desc" />
                    {/* <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> */}
                </Measure>
            </Form>
        );
    }
}

export default EmployeeForm;
