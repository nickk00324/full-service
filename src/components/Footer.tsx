import React from "react"
import styled from "styled-components"
import NewsletterForm from "./common/NewsletterForm"

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  flex-wrap: wrap;
  color: ${props => (props.isLanding ? "white" : "black")};
  p {
    margin: 5px 0;
  }
`

type FooterProps = {
  isLanding: boolean
}

const Footer = (props: FooterProps) => {
  return (
    <Container isLanding={props.isLanding}>
      <p>
        p. <a href="tel:17136280921">713.628.0921</a>
      </p>
      <p>
        e.{" "}
        <a href="mailto:fullservice.creative@gmail.com">
          fullservice.creative@gmail.com
        </a>
      </p>
      <p>
        a.{" "}
        <a href="https://www.google.com/maps/search/?api=1&query=34.040131819002376, -118.31496986647286">
          2421 W Washington Blvd. Los Angeles, CA 90018
        </a>
      </p>
      <NewsletterForm />
    </Container>
  )
}

export default Footer
