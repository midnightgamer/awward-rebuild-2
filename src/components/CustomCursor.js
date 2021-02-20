import React, { useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyle"
//Context
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
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
      <Cursor className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
              style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </>
  )
}

export default CustomCursor
