import { IWindowSize } from "@/types"
import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  })
  const resizeHandler = () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

  const debounceFunction = (func: () => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout>
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => func(), delay)
    }
  }
  const debounce = debounceFunction(resizeHandler, 50)

  useEffect(() => {
    window.addEventListener("resize", debounce)
    return () => {
      window.removeEventListener("resize", debounce)
    }
  }, [debounce])
  return windowSize
}
