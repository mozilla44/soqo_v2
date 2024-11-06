import useIsVisible from "hooks/useIsVisible"
import React, { ReactNode } from "react"
import { RoughNotation } from "react-rough-notation"

interface IProps {
  color: string
  textColor?: string
  isBold?: boolean
  children: ReactNode
  isVisible?: boolean | undefined
}

const Marker = ({
  color,
  textColor = "inherit", // Default to "inherit" to use the parent's text color if not provided.
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
      <span style={{ color: textColor }}>
        {isBold ? <b>{children}</b> : children}
      </span>
    </RoughNotation>
  )
}

export default Marker
