import React from 'react'
import styled from 'styled-components'


const Header = styled.nav.attrs({
    className: "flex justify-between bb b--white-10 bg-black"
})``

const TextBox = styled.div.attrs({
    className: "flex-grow pa3 flex items-center"
})``

const HeaderText = styled.p.attrs({
    className: "f6 link dib white dim mr3 mr4-ns"
})``

const PageHeader = () => (
    <Header>
        <TextBox>
            <HeaderText>DirectorMe</HeaderText>
            <HeaderText>Text</HeaderText>
        </TextBox> 
    </Header>
)

export default PageHeader