import React from "react"
import styled from "styled-components"
import { useDeviceDetect } from "../utils/useDeviceDetect"

const Container = styled.div`
  h3 {
    font-size: 72px;
    font-weight: 400;
  }
  img {
    position: fixed;
    z-index: -10000;
    left: 0;
    max-width: none;
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

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
    margin-top: 0;

    h3 {
      margin-top: 20px;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    max-width: 760px;
  }
  li {
    padding: 5px 0;

    ::before {
      content: "_ ";
    }
  }
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 0;
  p {
    max-width: 560px;
    text-align: right;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
    p {
      text-align: left;
    }
  }
`

const About = () => {
  const { isMobile } = useDeviceDetect()
  return (
    <Container>
      <p>
        Full Service is an artist-run, 1,500 square foot custom fabrication shop
        located in mid-city, Los Angeles, founded and operated by Casey Baden
        and Kenneth Yuen. Our goal at Full Service is to empower and bring to
        fruition a range of creative projects for artists and creatives, and to
        provide services for those who may not have access to the equipment
        needed to fully realize aspects of their artistic practice. With our
        wide-ranging skillsets, we can provide the necessary services, designs,
        and support to ensure the best, most considered results for your vision.{" "}
      </p>
      <p>
        We promise to provide a comprehensive, “full service” experience of the
        development of your project from concept to installation, and to help
        navigate the infrastructure around being an artist and pursuing
        exhibition.{" "}
      </p>
      <SectionContainer>
        <h3>Why Full Service?</h3>
        <p>
          We are a small business for artists, by artists committed to an
          ongoing evolution of our mission, programs, and services to better
          serve our community. We are sincerely interested in collaboration and
          will continue to invest in materials, equipment, and space to make our
          artistic goals accessible.
        </p>
      </SectionContainer>
      <ServicesContainer>
        <div className="Services_content">
          {isMobile && <h3>Services</h3>}
          <ul>
            <li>
              Problem solving and consultation for sculptures, installations,
              and other structures
            </li>
            <li>Pedestal, platform, and crate building</li>
            <li>
              Design and fabrication for exhibition, installation, and studio
              furniture
            </li>
            <li>
              Design and construction of studio storage, lofts, and other
              structures
            </li>
            <li>Building sculpture armatures</li>
            <li>Making custom stretchers for paintings </li>
            <li>
              Consultation and fabrication for other custom projects, materials
              may include: wood, metal, concrete, glass, fabric, electrical,
              etc.{" "}
            </li>
            <li>
              Modifying projects plans to: 1) meet site-specific standards 2) be
              built modularly for safe storage and transport 3) take archival
              and preservation conditions into consideration
            </li>
          </ul>
        </div>
        {!isMobile && <h3>Services</h3>}
      </ServicesContainer>
      <SectionContainer>
        <h3>Future Plans</h3>
        <p>
          We hope to expand our mission to include a more focused engagement
          with contemporary art. It is our intention to become a multi-purpose
          community project space that can offer classes, workshops, and
          conversation-based idea sharing opportunities, membership-based access
          to our tools and facilities, curated events, and to create
          opportunities through open calls and curatorial initiatives to put on
          exhibitions, host small residencies, and create experimental artist
          publications.{" "}
        </p>
      </SectionContainer>
    </Container>
  )
}

export default About
