import React from 'react';
// import employeeAdapter from '../api/EmployeeAdapter'
import styled from 'styled-components'


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

const SearchForm = (props) => {
 
        return (
            <Form onChange={(e) => props.handleChange(e)}>
                <Measure>
                    <Label htmlFor="name">Search by Name</Label>
                    <Input id="name" name="name" type="text" aria-describedby="name-desc" />
                </Measure>
            </Form>
        );
    
}

export default SearchForm;