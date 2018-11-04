import React, { Component } from 'react';
import DeptAdapter from '../api/DeptAdapter'

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
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {

    }
    
    render() {
        return (
            <Form onChange={this.handleChange}>
                <Measure>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" aria-describedby="name-desc" />
                    <Button onClick={this.handleSubmit}> Add</Button>
                    <Button primary onClick={this.props.formFn}>Close</Button>

                </Measure>
            </Form>
        );
    }
}

export default EmployeeForm;
