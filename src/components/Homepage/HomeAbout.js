import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Container, Flex } from "../../styles/globalStyle"
import { motion, useAnimation } from "framer-motion"
import {
  About,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  HomeAboutSection, HomeContentSection,
  Services,
} from "../../styles/homeStyles"
import { useGlobalStateContext } from "../../context/globalContext"

const accordionIds = [{
  id: 0,
  title: "Pre-production",
  results: ["Creative Development", "Writing", "Storyboards", "Art Direction", "Creative Direction"],
}, {
  id: 1,
  title: "Post-production",
  results: ["Creative Development", "Writing", "Storyboards", "Art Direction", "Creative Direction"],
}, {
  id: 3,
  title: "Audio Post-production",
  results: ["Creative Development", "Writing", "Storyboards", "Art Direction", "Creative Direction"],
}]
const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inVew] = useInView({
    triggerOnce: true,
    rootMargin:'-300px'

  })

  useEffect(() => {
    if (inVew) {
      animation.start("visible")
    }
  }, [inVew, animation])
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [0.6, 0.05, -.01, .9] } },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development and post-production
              services.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci consequatur corporis culpa cumque
              deleniti dicta ducimus eligendi, eos iste laudantium libero nisi odio perspiciatis provident quam
              quibusdam rem repudiandae rerum sapiente, similique tempora voluptatem.
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((item, index) => <Accordion
              expanded={expanded} setExpanded={setExpanded} key={index}
              onCursor={onCursor}
              details={item} />)}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}
const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  console.log(currentTheme)
  return (
    <>
      <AccordionHeader
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={() => onCursor()}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onClick={() => setExpanded(isOpen ? false : details.id)}>
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: .2, ease: [0.6, 0.05, -.01, 0.9] }}
          />
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: .2, ease: [0.6, 0.05, -.01, 0.9] }}
          />
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent key="content" animate={{ height: isOpen ? "100%" : 0 }}
                        transition={{ duration: .2, ease: [0.6, 0.05, -.01, 0.9] }}>
        {details.results.map((item, index) => <span key={index}>{item}</span>)}
      </AccordionContent>
    </>
  )
}
export default HomeAbout
