import React from "react"
import styled from "styled-components"
import NewsletterForm from "./common/NewsletterForm"

const Container = styled.div`
  height: 70vh;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    position: fixed;
    z-index: -10000;
    left: 0;
    bottom: 50px;
    max-width: none;
  }

  .ContactBlurb {
    max-width: 600px;
  }

  @media only screen and (max-width: 1040px) {
    display: block;
  }
`

const Contact = () => {
  return (
    <Container>
      <div className="Links">
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
          <a href="https://www.google.com/maps/place/4180+E+Washington+Blvd,+Commerce,+CA+90023/@33.9888084,-118.2068583,13z/">
            4180 E Washington Blvd. Commerce, CA 90023
          </a>
        </p>
        <p>
          i.{" "}
          <a href="https://www.instagram.com/__fullservice__/">
            __fullservice__
          </a>
        </p>
      </div>
      <div className="Contact">
        <p className="ContactBlurb">
          For project requests, please reach out to us at{" "}
          <a href="mailto:fullservice.creative@gmail.com">
            fullservice.creative@gmail.com
          </a>
          . We suggest including the following detailed specifications:
          materials, dimensions, time frame, ideal budget, location, and project
          context.{" "}
        </p>
        <NewsletterForm />
      </div>
    </Container>
  )
}

export default Contact
