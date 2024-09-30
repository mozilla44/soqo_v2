import useIsVisible from "hooks/useIsVisible"
import React, { ReactNode } from "react"
import { RoughNotation } from "react-rough-notation"

interface IProps {
  color: string
  isBold?: boolean
  children: ReactNode
  isVisible?: boolean | undefined
}

const Marker = ({
  color,
  children,
  isVisible = undefined,
  isBold = false,
}: IProps) => {
  const isElementVisible = useIsVisible()

  return (
    <RoughNotation
      animationDuration={960}
      color={color}
      show={isVisible === undefined ? isElementVisible : isVisible}
      type="highlight"
      multiline
    >
      {isBold ? <b>{children}</b> : children}
    </RoughNotation>
  )
}

export default Marker
