import React from "react"
import styled from "styled-components"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import CaseyPhoto from "../images/casey_rect.jpg"
import KennethPhoto from "../images/kenneth_rect.jpg"

const Container = styled.div`
  h3 {
    font-size: 72px;
    font-weight: 400;
    margin-top: 0;
  }
  a {
    color: #e9286e;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    h3 {
      font-size: 36px;
    }
  }
  p {
    line-height: 1.6;
  }
`

const BioContainer = styled.div``

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 72px 0;
  @media only screen and (max-width: 900px) {
    display: block;
    margin: 0;

    h3 {
      margin-top: 20px;
    }
  }
  p {
    max-width: 560px;
    text-align: ${props => props.align};
    @media only screen and (max-width: 900px) {
      text-align: left;
    }
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    text-align: ${props => (props.align === "right" ? "left" : "right")};
    @media only screen and (max-width: 900px) {
      text-align: left;
    }
  }
`

const TeamPhoto = styled.div`
  text-align: ${props => (props.align === "right" ? "right" : "left")};
  img {
    width: 400px;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      width: 300px;
    }
  }
`

const Team = () => {
  const { isMobile } = useDeviceDetect()
  return (
    <Container>
      <SectionContainer align={"right"}>
        <InfoContainer align={"right"}>
          <h3>Casey Baden</h3>
          <TeamPhoto>
            <img src={CaseyPhoto} alt={"casey"} />
          </TeamPhoto>
          <div className="Info__details">
            <p>Pronouns: She/Her</p>
            <p>
              Website: <a href="https://caseybaden.com">caseybaden.com</a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/casey.baden/">@casey.baden</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:casey.baden@gmail.com">casey.baden@gmail.com</a>
            </p>
          </div>
        </InfoContainer>
        <BioContainer>
          <p>
            Casey Baden is a visual artist, art worker, and textile designer
            with a plural practice engaged with craft in contemporary art. Born
            and raised in Houston, TX, she obtained a BFA from New York
            University, 2014, and an MFA from CalArts, 2020. Living and working
            between Los Angeles, CA and Austin, TX, in her art practice she
            explores the idea of embodying and inhabiting – both the physical
            body and the domestic space – with aims of divorcing the household
            and the feminine self from concepts of private property, domestic
            labor, gendered emotional experience, and fixed location. The works
            that result range from large-scale paintings, textile and
            architectural installations, weavings, fabric works, cyanotype and
            dyed pieces, ceramics, and mixed-media collages. She has worked in
            galleries, for artists, and arts institutions in New York, Houston,
            and Los Angeles, has exhibition work across the US and in Europe,
            and has attended residencies at Haystack Mountain School of Craft
            and Vermont Studio Center.
          </p>
          <p>
            {" "}
            At Full Service, Baden utilizes her wide ranging artistic and
            employment experiences to fulfill a multi-dimensional role as a
            small business owner. Baden is the primary
            correspondence manager, she develops quotes and estimates for
            project pricing, handles all budgeting, accounting, and general
            office management, while also serving as a fabricator. She
            is involved on all Full Service projects from both the front and
            back ends of production. For projects specializing in soft materials
            – fibers, upholstery, and even clay - she is the lead fabricator.{" "}
          </p>
          <p>
            As an independent artist, she is pursuing exhibition opportunities
            and has intensions of exploring a curatorial role in developing
            shows with an emphasis on collaboration or influence, of artists who
            work with, near, or in relation to one another. Additionally, she is
            developing a textiles resource center and fiber studio in LA with
            fellow artists, Minga Opazo.
          </p>
        </BioContainer>
      </SectionContainer>
    </Container>
  )
}

export default Team
