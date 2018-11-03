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

const Button = styled.p.attrs({
    className: "f6 link dim br-pill ph3 pv2 mb2 dib white bg-gold"
})``



class EmployeeForm extends Component {

    state = {
        name: '',
        title: '',
        location: '',
        direct: '',
        office: '',
        department_id: 2
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

                    <Button onClick={this.handleSubmit}>Add</Button>

                    

                </Measure>
            </Form>
        );
    }
}

export default EmployeeForm;
