import { useState } from "react"

const useIsVisible = () => {
  const [isVisible, setVisible] = useState(false)

  setTimeout(() => {
    setVisible(true)
  }, 800)

  return isVisible
}

export default useIsVisible
