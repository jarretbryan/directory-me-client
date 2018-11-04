import React from 'react'
import styled from 'styled-components'

const EmployeeCard = (props) => (
    <Article>
        <Title>{props.info.name}</Title>
        <Box>
            <Text><strong>Department: </strong>{props.info.department.name} </Text>
            <Text><strong>Title: </strong>{props.info.title}</Text>
            <Text><strong>Office: </strong>{props.info.office}</Text>
            <Text><strong>Direct Line: </strong>{props.info.direct}</Text>
        </Box>
    </Article>
)

const Article = styled.article.attrs({
    className: "mw5 center bg-white br3 pa3 pa4-ns mv3"
})``

const Title = styled.h1.attrs({
    className: "f3 mb2"
})``

const Box = styled.div.attrs({
    className: "tl"
})``

const Text = styled.h2.attrs({
    className: "f5 fw4 gray mt0"
})``

export default EmployeeCard