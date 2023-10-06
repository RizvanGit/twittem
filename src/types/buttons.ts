import { ReactNode } from "react"

export interface IButtonPrimeProps {
  className?: string
  title?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  isTwitterLogo: boolean
}
