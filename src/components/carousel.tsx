import React from "react"
import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"
import { useTransition, animated as a } from "react-spring"
import Link from "gatsby-plugin-transition-link/AniLink"

type CarouselProps = {
  images: [any]
}

const Container = styled.div`
  height: 80%;
`

const ImageContainer = styled(a.div)`
  height: 80vh;
  overflow: hidden;
`

const ArrowsContainer = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: flex-end;

  .Arrows {
    width: 100px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`

const Carousel = (props: CarouselProps) => {
  const { images } = props
  const [current, setCurrent] = React.useState(0)
  const [isReversing, setIsReversing] = React.useState(false)

  console.log(images)

  const handleClick = (direction: string) => {
    if (direction === "up") {
      const newCurrent = (current + 1) % images.length
      setCurrent(newCurrent)
      setIsReversing(false)
    } else if (direction === "down") {
      const newCurrent = current === 0 ? images.length - 1 : current - 1
      setCurrent(newCurrent)
      setIsReversing(true)
    }
  }

  const transitions = useTransition([current], item => item, {
    from: {
      transform: !isReversing ? "translate(200%, 0)" : "translate(-200%, 0)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { position: "absolute" },
  })

  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <Link fade to={images[item].absolutePath}>
          <ImageContainer key={key} style={props}>
            <Img fluid={images[item].childImageSharp.fluid} />
          </ImageContainer>
        </Link>
      ))}
      <ArrowsContainer>
        <div className="Arrows">
          <div className="Carousel__arrow" onClick={() => handleClick("down")}>
            {"<"}
          </div>
          <div className="Carousel__arrow" onClick={() => handleClick("up")}>
            {">"}
          </div>
        </div>
      </ArrowsContainer>
    </Container>
  )
}

export default Carousel
