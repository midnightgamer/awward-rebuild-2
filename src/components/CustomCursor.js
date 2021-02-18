import React, { useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyle"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e
    setMousePosition({ x, y })
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </>
  )
}

export default CustomCursor
