import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTransition, animated as a } from "react-spring"
import Link from "gatsby-plugin-transition-link/AniLink"

import FSCPurple from "../images/wordmark_logos/fsc_wordmark_purple.svg"
import FSCOrange from "../images/wordmark_logos/fsc_wordmark_orange.svg"
import FSCBlue from "../images/wordmark_logos/fsc_wordmark_blue.svg"
import FSCTeal from "../images/wordmark_logos/fsc_wordmark_teal.svg"
import FSCPink from "../images/wordmark_logos/fsc_wordmark_pink.svg"
import FSCGreen from "../images/wordmark_logos/fsc_wordmark_green.svg"

const ContainerContainer = styled.div`
  height: 100vh;
`

const LandingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 50vh;
  width: 100%;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
  }
`

const Content = styled(a.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  .Logo {
    padding-right: 30px;
    @media only screen and (max-width: 920px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
    }
  }

  img {
    width: 400px;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      width: 350px;
    }
  }
`

const Landing = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const logos = [FSCBlue, FSCGreen, FSCOrange, FSCPink, FSCPurple, FSCTeal]

  React.useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * Math.floor(logos.length)))
  }, [])
  const data = useStaticQuery(graphql`
    query landingImages {
      allImageSharp {
        nodes {
          fixed(width: 2000) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const landingImages = data.allImageSharp.nodes.filter((i: any) =>
    i.fixed.originalName.includes("landing")
  )

  const transitions = useTransition(true, null, {
    from: {
      transform: "translate(0, -100%)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { transform: "translate(0, 100%)" },
  })
  return (
    <ContainerContainer>
      <LandingContainer>
        {transitions.map(({ item, props, key }) => (
          <Content key={key} style={props}>
            <div className="Logo">
              <img src={logos[currentIndex]} />
            </div>
            <LandingHeader />
          </Content>
        ))}
      </LandingContainer>
      <SlideShow images={landingImages} />
    </ContainerContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 180px;
  color: white;
  font-size: 16px;

  @media only screen and (max-width: 920px) {
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    flex-direction: column;
    height: unset;
    align-items: flex-start;
    margin: 0 auto;
    width: unset;
    margin-top: 40px;
  }

  a {
    margin: 20px;
    font-size: 18px;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      margin: 20px 0;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`

const LandingHeader = () => {
  return (
    <HeaderContainer>
      {" "}
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/contact">Contact</Link>
    </HeaderContainer>
  )
}

type SlideShowProps = {
  images: [any]
}

const ImageHolder = styled.div`
  height: 118vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100000;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    height: 124vh;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    height: 130vh;
  }
`

const Shade = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: -1000;
`

const SlideShow = (props: SlideShowProps) => {
  const { images } = props

  const init = () => {
    return Math.floor(Math.random() * Math.floor(images.length))
  }

  const [currentIndex, setCurrentIndex] = React.useState(init())

  React.useEffect(() => {
    setTimeout(changeIndex, 5000)
  })

  const changeIndex = () => {
    const newIndex = currentIndex + 1
    if (newIndex >= images.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(newIndex)
    }
  }

  const transitions = useTransition([currentIndex], item => item, {
    from: {
      transform: "translate(0, 100%)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { position: "absolute", transform: "translate(0, -100%)" },
  })

  return (
    <>
      <Shade />
      <ImageHolder>
        {transitions.map(({ item, props, key }) => (
          <a.div key={key} style={props}>
            <Img fixed={images[item].fixed} />
          </a.div>
        ))}
      </ImageHolder>
    </>
  )
}

export default Landing
