import React from "react"
import styled from "styled-components"
import orangeLines from "../images/orange_lines.svg"

const Container = styled.div`
  img {
    position: fixed;
    z-index: -10000;
    left: 0;
    bottom: 50px;
    max-width: none;
  }
`

const Contact = () => {
  return (
    <Container>
      <img src={orangeLines} />
      <p>p. 713.628.0921</p>
      <p>e. fullservice.creative@gmail.com</p>
    </Container>
  )
}

export default Contact
