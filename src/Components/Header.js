import React from 'react'
import styled, { css } from 'styled-components'


const Header = styled.nav.attrs({
    className: "flex justify-between bb b--white-10 bg-black"
})``

const TextBox = styled.div.attrs({
    className: "flex-grow pa3 flex items-center"
})``

const HeaderText = styled.h1.attrs({
    className: "f6 link dib white dim mr3 mr4-ns"
})``

const Button = styled.p.attrs({
    className: "f6 link dim br-pill ph3 pv2 mb2 dib white"
})`
    background: orange
    margin: 1em;

    ${props => props.dept && css`
    background: blue;
    color: white;
  `}`

const PageHeader = (props) => (
    

    <Header>
        <TextBox>
            <HeaderText>DirectorMe</HeaderText>
            <Button onClick={props.addEmp}>Add Employee</Button> |
            <Button onClick={props.addDept} dept>Add Department</Button>
        </TextBox> 
    </Header>
)

export default PageHeader