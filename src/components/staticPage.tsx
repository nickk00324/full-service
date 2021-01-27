import React from "react"
import styled from "styled-components"
import { useTransition, animated as a } from "react-spring"

// this is a page wrapper for non-index static pages

const StyledPage = styled.div`
  margin: 0;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    /* margin: 200px 25px; */
  }

  .title {
    margin: 0;
    font-size: 96px;
    font-weight: 400;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      font-size: 72px;
    }
  }
`

const Container = styled(a.div)`
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
  }
  p {
    line-height: 1.6;
  }

  img {
    position: fixed;
    bottom: 200px;
    max-width: none;
    left: 0;
  }

  h2 {
    margin-top: 0;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 2;

  @media only screen and (max-width: 1280px) {
    grid-column: 2 / span 3;
  }
  p {
    margin-top: 0;
  }
  a {
    &:hover {
    }
  }
`

const Page = props => {
  const { title, children } = props

  const transitions = useTransition(true, null, {
    from: {
      transform: "translate(0, 100%)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { transform: "translate(0, -100%)" },
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
