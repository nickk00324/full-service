import React from "react"
import styled from "styled-components"
import QuarterLife from "../images/Final.gif"

const Container = styled.div`
  .ShowImage {
    width: 500px;
    margin: 30px auto;

    @media only screen and (max-width: 600px) {
      width: 300px;
    }

    img {
      @media only screen and (max-width: 600px) {
        width: 300px;
      }
    }
  }

  .Description {
    margin-top: 48px;
  }

  .HeaderInfo {
    margin-bottom: 36px;
    p {
      margin: 8px 0;
    }
  }
`

const Exhibition = () => {
  return (
    <Container>
      <div className="ShowImage">
        <img src={QuarterLife} />
      </div>
      <Something />
      <div className="Description">
        <div className="HeaderInfo">
          <p>quarter life </p>
          <p>Casey Baden, Ashu Gera, a/w/k, & Kenneth Yuen</p>
          <p>April 23 – May 13, 2021</p>
        </div>
        <p>
          “A period of insecurity, doubt, and disappointment surrounding your
          career, relationships, and/or financial situation” or more generally,
          “anxiety over the direction and quality of one’s life” … This is the
          definition of a ‘quarter life crisis’. Coincidentally, 3 of the 4
          included artists in this exhibition were 25 years old in 2020. They
          had lived, a quarter of a century. On the flip side, the number 4 is a
          sign of stability and balance. We are constantly surrounded by groups
          of 4 throughout nature: 4 cardinal points, 4 phases of the moon, 4
          seasons, 4 elements… Being 1 of 4 - or a quarter of the whole, somehow
          makes you feel stable. These two ideas, and an oscillation between
          growth and permanence, set the stage for quarter life, an exhibition
          of works by Casey Baden, Ashu Gera, a/w/k, and Kenneth Yuen created
          over the last year. These 4 artists have persisted, together, through
          the trials of the covid-19 pandemic by way of shared experience,
          shared living, and shared studio space. Although their practices vary
          widely in material, concept, and application, they are united through
          locality, friendship, and arts education.{" "}
        </p>
        <p>Casey Baden</p>
        <p>
          Casey Baden is a multidisciplinary artist working with textiles, text,
          natural dye, sun-lit photographic exposures, painting, weaving, clay,
          and installation. Her practice engages with the concept of
          subject(ivity) and object(ivity); embracing how these positionalities
          collapse when we engage in relationship. She is interested in the body
          and its specific experience, fascinated by the concept of embodiment.
          Additionally, she is invested in images of touch, attempting to foster
          the critical space of emotion. An array of dichotomies: attraction and
          repulsion, holding on and letting going, independence and belonging,
          individuality and uniformity, private and public, personal and
          political, fuel her works.
        </p>
        <p>
          Baden completed her BFA at New York University, 2014, and her MFA at
          California Institute of the Arts, 2020. She has been awarded
          residencies at Haystack Mountain School of Craft, Vermont Studio
          Center, The Reef, and AZ West, and has exhibited works in the US and
          Europe. In Los Angeles, exhibitions have included the MAK Center for
          Art and Architecture, The Wing, 00LA, Other Places Art Fair, and
          CalArts. Presently, she is the co-founder of the artist-run space and
          arts fabrication project called Full Service Creative.{" "}
        </p>
        <p>Ashu Gera </p>
        <p>
          Ashu Gera (b. 1995) is a visual artist working primarily with painting
          and collage, currently based in Los Angeles. In his work, Gera
          obsessively investigates the cause-and-effect relationship that we
          develop as individuals mirrored within the larger societal structure.
          His current body of work examine and engages with the concept of
          “dope” (i.e. the slang term used for drugs and illicit substances, and
          more commonly in the 2000s, a word used to describe just about
          anything with a positive and affectionate sense of approval). This
          word and idea are both explored in the context of millennial culture,
          investigating their effects and implications on the human brain and on
          cultural perceptions more generally. Gera’s paintings use imagery
          relating to pornography, fast food, social media, television, and
          other less-than-healthy/habit forming tendencies to examine modern
          addictions and psychologies.{" "}
        </p>
        <p>
          Gera received his BFA in painting and printmaking from The Maharaja
          Sayajirao University of Baroda, India and his MFA from California
          Institute of the Arts, where he worked closely with eminent pedagogues
          including Darcy Huebler, Jessica Bronson, and Lecia Dole-Recio among
          others. His work has been exhibited in Vardodara, Ahmedabad, Abilene,
          Hopkins Center for the Arts, and Los Angeles.
        </p>
        <p>a/w/k</p>
        <p>
          a/w/k is someone that amalgamates objects & images birthed out of
          informational & material systems that recycle definitions of
          love/capital/personhood/causality. Often operating on a maximal
          process of collection & re-organization, this repertoire of
          componential things is conflated & precariously formed in resistance
          to professionalism & concrete meaning. a/w/k likes to ruminate in a
          cloud of nostalgia/shifting presents/impossible futures. a/w/k was
          educated in Los Angeles & hopes to stay there for at least a few more
          years.
        </p>
        <p>Kenneth Yuen</p>
        <p>
          At the core of Yuen's practice is sculpture. Currently,
          Yuen is interested in the exploration of material phenomenology, at an
          intersection of form and content. This interest often manifests in the
          deployment of semiotics that refer to historical-cultural contexts or
          possible masquerading identities. In regards to this masquerade,
          Yuen is also interested in the notions of objects that would possibly
          do the same; that an object could possibly function in realms of
          duality. Yuen also seeks to explore the aesthetics of mechanical
          manufacturing, the notions of the handmade, the artist’s hand and the
          apparent absence of the latter in relationship to chosen materials and
          how this may lead to questions of an object’s place in context.
          However, Yuen is not so much interested in the questions of biography,
          instead is interested in cultural experience and notions of shared
          narratives.
        </p>
        <p>
          Kenneth Yuen is a Los Angeles and Vancouver based artist. Yuen
          received his BFA from Kwantlen Polytechnic University, Surrey, BC,
          Canada (2018), and his MFA at the California Institute of the Arts
          (2020). Yuen is also the co-founder of the artist-run space and arts
          fabrication shop, Full Service Creative in Los Angeles, California.{" "}
        </p>
      </div>
    </Container>
  )
}

const SomethingContainer = styled.div`
  text-align: center;
  margin: 48px 0;
  a {
    background: #5fb8b9;
    color: #fff;
    padding: 8px 12px;
    border: 0px;
    -webkit-box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset;
    -moz-box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset;
    box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset;
    border-radius: 4px;
    text-decoration: none;
  }
`

const Something = () => {
  return (
    <SomethingContainer>
      <a
        href="https://app.squarespacescheduling.com/schedule.php?owner=22482441"
        target="_blank"
        className="acuity-embed-button"
      >
        Schedule Appointment
      </a>
    </SomethingContainer>
  )
}

export default Exhibition
