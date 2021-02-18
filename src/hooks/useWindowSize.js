import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
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

