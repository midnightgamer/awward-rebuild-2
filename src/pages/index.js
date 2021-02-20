import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Homepage/HomeBanner"
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/globalContext"
import HomeContent from "../components/Homepage/HomeContent"
import HomeFeatured from "../components/Homepage/HomeFeatured"

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return <Layout>
    <HomeBanner onCursor={onCursor} />
    <HomeContent />
    <HomeFeatured onCursor={onCursor} />
  </Layout>
}

export default IndexPage
