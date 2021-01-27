import React from "react"
import styled from "styled-components"
import NewsletterForm from "./common/NewsletterForm"

const Container = styled.div`
  height: 100vh;
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
`

const Contact = () => {
  return (
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
      <p className="ContactBlurb">
        For project requests, please reach out to us at{" "}
        <a href="mailto:fullservice.creative@gmail.com">
          fullservice.creative@gmail.com
        </a>
        . We suggest including the following detailed specifications: materials,
        dimensions, time frame, ideal budget, location, and project context.{" "}
      </p>
      <NewsletterForm />
    </Container>
  )
}

export default Contact
