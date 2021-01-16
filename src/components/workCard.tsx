import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"
import { useTransition, animated as a } from "react-spring"

// this component is each individual image on the grid

type WorkCardProps = {
  title: string
  image: any
  slug: string
}

const Card = styled.div`
  width: 400px;
  max-height: 266px;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 100%;
  }
  p {
    position: relative;
    top: -166px;
    left: -30px;
    font-size: 96px;
    color: #eee;
    margin: 0;
    padding: 0;
  }
`

const ImageContainer = styled.div`
  height: 266px;
`

const WorkCard = (props: WorkCardProps) => {
  const { title, slug, image } = props
  const [showInfo, setShowInfo] = React.useState(false)
  const transitions = useTransition(showInfo, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <Card>
      <Link
        fade
        to={`/projects/${slug}`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <ImageContainer>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageContainer>
        {transitions.map(
          ({ item, props, key }) =>
            item && (
              <a.div key={key} style={props}>
                <p>{title}</p>
              </a.div>
            )
        )}
      </Link>
    </Card>
  )
}

export default WorkCard
