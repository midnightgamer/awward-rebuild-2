import React, { useEffect } from "react"
//Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { Container } from "../../styles/globalStyle"
import { Content, HomeContentSection } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inVew] = useInView({
    triggerOnce: true,
    rootMargin:'-300px'

  })

  useEffect(() => {
    if (inVew) {
      animation.start("visible")
    }
  }, [inVew, animation])
  return (
    <HomeContentSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [0.6, 0.05, -.01, .9] } },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Content>
          Great stories don't just happen-<br /> they need to be uncovered. And we dig deep to discover
          the great the great stories that lie just below the surface.
          Dirt under our fingernail and all.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
