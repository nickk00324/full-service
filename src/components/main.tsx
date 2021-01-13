import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import ScrollContainer from "react-indiana-drag-scroll"
import Works from "./works"
import Zoom from "./zoom"

// logic component that wraps the works component

const DragContainer = styled(ScrollContainer)`
  height: 100vh;
  width: 100vw;
  overflow: scroll !important;
`

type MainProps = {
  initial: boolean
  scrollPos: number[]
  setInitial: (b: boolean) => void
  setScrollPos: (n: number[]) => void
  scaleAmount: number
  setScaleAmount: (n: number) => void
}

const Main = (props: MainProps) => {
  const container = useRef(null)
  const {
    initial,
    scrollPos,
    setInitial,
    setScrollPos,
    scaleAmount,
    setScaleAmount,
  } = props

  return (
    <>
      <p>landing page</p>
    </>
  )
}

export default Main
