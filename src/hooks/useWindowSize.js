import { useState, useEffect } from "react"

export default function useWindowSize() {

  let defaultHeight
  let defaultWidth

  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight
    defaultWidth = window.innerWidth
  }


  function getSize() {
    return {
      width: defaultWidth,
      height: defaultHeight,
    }
  }

  const [windowSize, setWidowsSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => {
      setWidowsSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize;

}

