import { NavigationItems, SocialMedia } from "./interface"

export interface NavigationProps{
  state?: boolean
  setState?: () => void
  items: NavigationItems[]
  logo?: string
}
export interface CardIntroProps {
  text: string
  title: string
  image: string
  button: string
}

export interface CarouselProps{
  images: string[]
  speed: number
}

export interface SectionIntroProps{
  images: string[]
  speed: number
  items: CardIntroProps[]
}

export interface CardInfoProps{
  label: string
  title: string
  slogan: string
  text: string
  items: string[]
  button: string
}

export interface SectionWhyChoiceProps{
  info: CardInfoProps,
  image: string
}
export interface CardDentistProps{
  image: string,
  name: string,
  special: string, 
  text: string,
  fb: string,
  email: string, 
  phone: string,
  url: string,
}
export interface CarouselCardsProps{
  cards: CardDentistProps[]
}
export interface SectionOurDoctorsProps{
  doctors: CardDentistProps[]
  title: string
}
export interface BtnWhatsAppProps {
  text: string,
  logo: string, 
  textTwo:string, 
  title: string
}

export interface ChatWhatsAppProps{
  state: boolean
  setState: () => void
  logo: string,
  title: string
  text: string
}

export interface CardServiceProps{
  title: string, 
  icon: string,
  color: string,
  text: string
}

export interface SectionServiceProps {
  title: string
  text: string
  items: CardServiceProps[]
}

export interface QuestionAnswerProps{
  title: string
  text: string
}

export interface QuestionQAProps{
  title: string,
  text: string
  items: QuestionAnswerProps[]
}
export interface CardOpinionProps{
  avatar: string, 
  opinion: string,
  name: string,
  tag: string
}
export interface SectionOurClientProps{
  title: string, 
  text: string,
  items: CardOpinionProps[]
}
export interface FooterProps{
  logo: string,
  text: string,
  media: SocialMedia[],
  navigation: NavigationItems[],
  contacts: string[],
  labelNavigation: string,
  labelContact: string
}