import { InputTypes } from "./enum";
import {
  Contacts,
  NavigationItems,
  Product,
  Service,
  SocialMedia,
} from "./interface";
export interface NavigationProps {
  state?: boolean;
  setState?: () => void;
  items: NavigationItems[];
  logo?: string;
  info?: { title: string; text: string }[];
  Component?: JSX.Element;
}
export interface RenderConditionalLinksProps {
  items: NavigationItems[];
}
export interface CardIntroProps {
  text: string;
  title: string;
  image: string;
  button: string;
}
export interface BannerProps {
  image: string;
  title?: string;
  text?: string;
}
export interface CarouselProps {
  images: BannerProps[];
  speed: number;
}

export interface SectionIntroProps {
  images: BannerProps[];
  speed: number;
  items: CardIntroProps[];
  sectionRefs?: React.RefObject<HTMLDivElement>[];
}

export interface CardInfoProps {
  label: string;
  title: string;
  slogan: string;
  text: string;
  items: string[];
  button: string;
}

export interface SectionWhyChoiceProps {
  info: CardInfoProps;
  image: string;
}
export interface CardDentistProps {
  image: string;
  name: string;
  special: string;
  text: string;
  fb: string;
  email: string;
  phone: string;
  url: string;
}
export interface CarouselCardsProps {
  cards: CardDentistProps[];
}
export interface SectionOurDoctorsProps {
  doctors: CardDentistProps[];
  title: string;
}
export interface BtnWhatsAppProps {
  text: string;
  logo: string;
  textTwo: string;
  title: string;
}

export interface ChatWhatsAppProps {
  state: boolean;
  setState: () => void;
  logo: string;
  title: string;
  text: string;
}

export interface CardServiceProps {
  title: string;
  icon: string;
  color: string;
  text: string;
}

export interface SectionServiceProps {
  title: string;
  text: string;
  items: CardServiceProps[];
}

export interface QuestionAnswerProps {
  title: string;
  text: string;
}

export interface QuestionQAProps {
  title: string;
  text: string;
  items: QuestionAnswerProps[];
}
export interface CardOpinionProps {
  avatar: string;
  opinion: string;
  name: string;
  tag: string;
}
export interface SectionOurClientProps {
  title: string;
  text: string;
  items: CardOpinionProps[];
}
export interface FooterCompressedProps {
  footer: FooterProps;
}
export interface FooterProps {
  logo: string;
  text: string;
  media: SocialMedia[];
  navigation: NavigationItems[];
  contacts: Contacts[];
  labelNavigation: string;
  labelContact: string;
  copyright: string;
  question: string;
  button: string;
}

export interface FooterQuestionProps {
  text: string;
  button: string;
}

export interface DragImageProps {
  smile_good: string;
  smile_bad: string;
}

export interface SectionBestResultsProps {
  title: string;
  text: string;
  images: DragImageProps;
}

export interface ServiceOptionsProps {
  services: Service[];
}

export interface CustomInputProps {
  icon?: JSX.Element;
  label: string;
  placeholder: string;
  type: InputTypes;
  withIcon: boolean;
  multiline?: boolean;
  options?: { name: string; value: string }[];
  isRequired?: boolean;
  isLabel?: boolean;
}
export interface FormInputProps {
  inputs: CustomInputProps[];
  textarea: CustomInputProps;
}
export interface FormAppointmentProps {
  form: FormInputProps;
  services: Service[];
}
export interface SectionAppointmentProps {
  services: Service[];
  title: string;
  text: string;
  form: FormInputProps;
}

export interface NavInfoProps {
  info: { title: string; text: string }[];
}

export interface CardFindUsProps {
  image: string;
  title: string;
  description: string;
  contact: string;
}

export interface SectionFindUsProps {
  items: CardFindUsProps[];
  title: string;
  text: string;
  tag: string;
}
export interface FormContactProps {
  inputs: CustomInputProps[];
}
export interface SectionContactProps {
  inputs: CustomInputProps[];
  title: string;
  text: string;
}

export interface CardProductProps {
  name: string;
  description: string;
  image: string;
  price: number;
  descount?: number;
  like: boolean;
  tag?: { bg: string; color: string; text: string };
}

export interface NavigationUserProps {
  items?: { name: string; to: string; active: boolean }[];
}

export interface ProductBagProps {
  products: Product[];
}
export interface LeftDropDownProps {
  title: string;
  setState(): void;
  products: Product[];
  state: boolean;
  Component?: JSX.Element;
  image: JSX.Element | string;
  ProductComponent: JSX.Element;
}

export interface SubTotalProps {
  products: Product[];
}

export interface MapProps {
  src: string;
}
export interface CardMisionProps{
  title: string,
  text: string
}
export interface SectionVisionMisionProps{
  items: CardMisionProps[];
  image: string
}