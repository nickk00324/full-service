import React from "react"
import styled from "styled-components"
import NewsletterForm from "./common/NewsletterForm"

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
  p {
    margin: 5px 0;
  }
`

const ContainerContainer = styled.div`
  color: ${props => (props.isLanding ? "white" : "black")};
  .Footer__end-stuff {
    font-size: 10px;
    text-align: center;
    padding-bottom: 10px;
  }
`

type FooterProps = {
  isLanding: boolean
}

const Footer = (props: FooterProps) => {
  return (
    <ContainerContainer isLanding={props.isLanding}>
      <Container>
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
        <p>
          i.{" "}
          <a href="https://www.instagram.com/__fullservice__/">
            __fullservice__
          </a>
        </p>
        <NewsletterForm />
      </Container>
      <div className="Footer__end-stuff">
        © 2021, Full Service Creative. All rights reserved. website by{" "}
        <a href="https://nickkochornswasdi.com">nk</a>
      </div>
    </ContainerContainer>
  )
}

export default Footer
