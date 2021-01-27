import React from "react"
import styled from "styled-components"
import { useDeviceDetect } from "../utils/useDeviceDetect"

const Container = styled.div`
  h3 {
    font-size: 72px;
    font-weight: 400;
    margin-top: 0;
  }
  a {
    color: #e9286e;
  }

  img {
    position: fixed;
    z-index: -10000;
    left: 0;
    max-width: none;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      bottom: 30px;
    }
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
  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
    margin: 0;

    h3 {
      margin-top: 20px;
    }
  }
  p {
    max-width: 560px;
    text-align: ${props => props.align};
    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
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
    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      text-align: left;
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
            small business co-owner/co-founder. Baden is the primary
            correspondence manager, she develops quotes and estimates for
            project pricing, handles all budgeting, accounting, and general
            office management, while also serving as a secondary fabricator. She
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
      <SectionContainer align={"left"}>
        {isMobile && (
          <InfoContainer align={"left"}>
            <h3>Kenneth Yuen</h3>
            <div className="Info__details">
              <p>Pronouns: He/Him</p>
              <p>
                Website:{" "}
                <a href="mailto:worksbykennethyuen@gmail.com">
                  worksbykennethyuen@gmail.com
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/knnt.yn/">@knnt.yn</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:worksbykennethyuen@gmail.com">
                  worksbykennethyuen@gmail.com
                </a>
              </p>
            </div>
          </InfoContainer>
        )}
        <BioContainer>
          <p>
            Kenneth Yuen is a Los Angeles and Vancouver based artist. Yuen
            received his BFA from Kwantlen Polytechnic University, Surrey, BC,
            Canada (2018), then completed his MFA at the California Institute of
            the Arts (2020). At the core of Yuen's practice is sculpture.
            Currently Yuen is interested in the exploration of material
            phenomenology, at an intersection of form. This interest often
            manifests in the employment of materials and forms that function as
            semiotic signifiers that refer to historical-cultural contexts or
            possible masquerading identities. Yuen seeks to explore the
            aesthetics of mechanical manufacturing, the notions of the handmade,
            the artist’s hand and the apparent absence of the latter in
            relationship to chosen materials and how this may lead to questions
            of an object’s place in context. Yuen has exhibited work in the US
            and Canada, and has curated exhibitions such as Conflux, at Kwantlen
            Polytechnic University.
          </p>
          <p>
            At Full Service, Yuen is the co-founder, lead project manager, and
            head fabricator. He develops all necessary structural engineering
            and design for projects in metal, wood, and concrete. As a sculptor
            in his own practice, Yuen approaches each fabrication or
            construction project as if it were his own work, ensuring economical
            and practical function and design. His skills include developing
            custom hardware, creating unique molds, building components off
            site, installing projects securely and seamlessly, working with
            kinetic and/or electrical mechanisms of a work, and more.
          </p>
          <p>
            Additionally, Yuen is a car enthusiast and mechanic, with a
            particular penchant for BMWs. Working on cars is his form of
            meditation, and he has rescued a number of artists from their car
            troubles. For this we are very grateful!
          </p>
        </BioContainer>
        {!isMobile && (
          <InfoContainer align={"left"}>
            <h3>Kenneth Yuen</h3>
            <div className="Info__details">
              <p>Pronouns: He/Him</p>
              <p>
                Website:{" "}
                <a href="mailto:worksbykennethyuen@gmail.com">
                  worksbykennethyuen@gmail.com
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/knnt.yn/">@knnt.yn</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:worksbykennethyuen@gmail.com">
                  worksbykennethyuen@gmail.com
                </a>
              </p>
            </div>
          </InfoContainer>
        )}
      </SectionContainer>
    </Container>
  )
}

export default Team
