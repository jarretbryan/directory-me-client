import React from 'react'
import styled from 'styled-components'


const Article = styled.article.attrs({
    className: "center mw5 mw6-ns hidden ba mv4"
})``

const Title = styled.h1.attrs({
    className: "f4 bg-near-black white mv0 pv2 ph3"
})``

const Box = styled.div.attrs({
    className: "pa3 bt"
})``

const Text = styled.li.attrs({
    className: "f6 f5-ns lh-copy measure mv0"
})``


const EmployeeCard = (props) => (
    <Article>
        <Title>{props.info.name}</Title>
        <Box>
            <ul>
                <Text>Department: {props.info.department.name} </Text>
                <Text>Title: {props.info.title}</Text>
                <Text>Office: {props.info.office}</Text>
                <Text>Direct Line: {props.info.direct}</Text>
            </ul>
        </Box>
    </Article>
)

export default EmployeeCard