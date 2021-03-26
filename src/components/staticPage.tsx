import React from "react"
import styled from "styled-components"
import { useTransition, animated as a } from "react-spring"
import { Location } from "@reach/router"

// this is a page wrapper for non-index static pages

const StyledPage = styled.div`
  margin: 0;
  overflow: hidden;

  .title {
    margin: 0;
    font-size: ${props => (props.isExhibition ? "72px" : "96px")};
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
    <Location>
      {({ location }) => {
        return (
          <StyledPage isExhibition={location.pathname === "/exhibition"}>
            {transitions.map(({ item, props, key }) => (
              <Container key={key} style={props}>
                <h2 className="title">{title}</h2>
                <Body>{children}</Body>
              </Container>
            ))}
          </StyledPage>
        )
      }}
    </Location>
  )
}

export default Page
