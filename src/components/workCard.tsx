import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"
import { useTransition, animated as a } from "react-spring"
import { useDeviceDetect } from "../utils/useDeviceDetect"

// this component is each individual image on the grid

type WorkCardProps = {
  title: string
  image: any
  slug: string
}

const Card = styled.div`
  width: 400px;
  height: 266px;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    width: 350px;
  }
  img {
    height: 266px;
  }
  p {
    position: relative;
    top: -166px;
    left: -30px;
    font-size: 96px;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }

  &:hover {
    transform: scale(1.02);
  }
  transition: all 0.5s;

  &:last-child {
    margin-bottom: 200px;
  }
`

const ImageContainer = styled.div`
  height: 100%;
`

const Img = styled(Image)`
  height: 266px;
`

const WorkCard = (props: WorkCardProps) => {
  const { title, slug, image } = props
  const [showInfo, setShowInfo] = React.useState(false)
  const { isMobile } = useDeviceDetect()
  const transitions = useTransition(showInfo, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <Card>
      <Link
        fade
        to={`/projects${slug}`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <ImageContainer>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageContainer>
        {!isMobile ? (
          transitions.map(
            ({ item, props, key }) =>
              item && (
                <a.div key={key} style={props}>
                  <p>{title}</p>
                </a.div>
              )
          )
        ) : (
          <p>{title}</p>
        )}
      </Link>
    </Card>
  )
}

export default WorkCard
