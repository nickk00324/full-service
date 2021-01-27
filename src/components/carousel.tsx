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
  overflow: hidden;
`

const ImageContainer = styled(a.div)`
  height: 70vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    height: 50vh;
  }
`

const ArrowsContainer = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: flex-end;

  .Arrows {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .Carousel__show-all {
    font-size: 16px;
  }
`

const Image = styled(Img)``

const Carousel = (props: CarouselProps) => {
  const { images } = props
  const [current, setCurrent] = React.useState(0)
  const [showAll, setShowAll] = React.useState(false)
  const [isReversing, setIsReversing] = React.useState(false)

  const handleClick = (direction: string) => {
    setShowAll(false)
    if (direction === "up") {
      const newCurrent = current === images.length - 1 ? 0 : current + 1
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
        <Link fade to={images[item].src}>
          {showAll ? (
            <AllPhotos images={images} />
          ) : (
            <ImageContainer key={key} style={props}>
              <Image fluid={images[item].childImageSharp.fluid} />
            </ImageContainer>
          )}
        </Link>
      ))}
      <ArrowsContainer>
        <div className="Arrows">
          <div className="Carousel__arrow" onClick={() => handleClick("down")}>
            {"<"}
          </div>
          <div
            className="Carousel__show-all"
            onClick={() => setShowAll(!showAll)}
          >
            show all
          </div>
          <div className="Carousel__arrow" onClick={() => handleClick("up")}>
            {">"}
          </div>
        </div>
      </ArrowsContainer>
    </Container>
  )
}

type AllPhotosProps = {
  images: [any]
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: space-between;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .ImageHolder {
    max-height: 300px;
    width: 300px;
    overflow: hidden;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      width: 200px;
    }
  }
`

const AllPhotos = (props: AllPhotosProps) => {
  return (
    <Grid>
      {props.images.map(i => (
        <div className="ImageHolder">
          <Img fluid={i.childImageSharp.fluid} />
        </div>
      ))}
    </Grid>
  )
}

export default Carousel
