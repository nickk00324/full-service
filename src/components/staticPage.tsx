import React from "react"
import styled from "styled-components"
import { useTransition, animated as a } from "react-spring"
import { isExternalModuleNameRelative } from "typescript"

// this is a page wrapper for non-index static pages

const StyledPage = styled.div`
  margin: 0;
  overflow: hidden;

  .title {
    margin: 0;
    font-size: 96px;
    font-weight: 400;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      font-size: 72px;
    }
  }
`

const Container = styled(a.div)``

const Body = styled.div``

const Page = props => {
  const { title, children } = props

  const transitions = useTransition(true, null, {
    from: {
      transform: "translate(0, 100%)",
      position: "absolute",
    },
    enter: { transform: "translate(0, 0)", position: "relative" },
    leave: { position: "absolute" },
    reset: true,
  })

  return (
    <StyledPage>
      {transitions.map(({ item, props, key }) => (
        <Container key={key} style={props}>
          <h2 className="title">{title}</h2>
          <Body>{children}</Body>
        </Container>
      ))}
    </StyledPage>
  )
}

export default Page
