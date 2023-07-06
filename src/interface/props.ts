import { NavigationItems } from "./interface"

export interface NavigationProps{
  items: NavigationItems[]
  logo?: string
  state?: boolean
  setState?: () => void
}
export interface CardIntroProps {
  text: string
  title: string
  image: string
  button: string
}
