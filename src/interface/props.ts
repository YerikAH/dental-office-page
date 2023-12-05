import { Moment } from "moment";
import { InputTypes } from "./enum";
import {
  Contacts,
  NavigationItems,
  OptionsFilter,
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
  darkMode?: boolean;
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
  descriptionI: string;
  descriptionII: string;
  contacts: Contacts[];
  labelOne: string;
  labelTwo: string;
  labelThree: string;
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
  setFormState?: (value: string, name: string, error: boolean) => void;
}

export interface CustomInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: InputTypes;
  withIcon: boolean;
  icon?: JSX.Element;
  multiline?: boolean;
  options?: { name: string; value: string }[];
  isRequired?: boolean;
  isLabel?: boolean;
  regex?: RegExp;
  max?: number;
  min?: number;
  setFormState?: (value: string, name: string, error: boolean) => void;
  isSubmit?: boolean;
}
export interface FormInputProps {
  inputs: CustomInputProps[];
  textarea: CustomInputProps;
  setFormState?: (value: string, name: string, error: boolean) => void;
  isSubmit?: boolean;
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
  onLikeProduct(): void;
  onClickProduct(): void;
  onClickBag(): void;
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
export interface CardMisionProps {
  title: string;
  text: string;
}
export interface SectionVisionMisionProps {
  items: CardMisionProps[];
  image: string;
}

export interface InputModalProps {
  type: InputTypes;
  value?: Moment | null;
  onChange?: (newValue: Moment | null) => void;
  options?: OptionsFilter[];
  onClick?: (value: string) => void;
}

export interface WelcomeProps {
  title: string;
  text: string;
  img: string;
  button: string;
}
export interface CardIconProps {
  img: string;
  title: string;
  text: string;
}

export interface SectionNumbersProps {
  ITEMS: CardIconProps[];
}

export interface SectionParallaxProps {
  title?: string;
  text?: string;
  slogan?: string;
  image?: string;
  logo?: string;
}

export interface ModalSettingsProps {
  text: string;
  button: string;
}

export interface RegisterProps {
  state: boolean;
  setState(state: boolean): void;
}

export interface LoginProps {
  state: boolean;
  setState(state: boolean): void;
}

export interface SliderProductProps {
  images: string[];
}

export interface InfoProductProps {
  product: {
    name: string;
    description: string;
    image: string;
    price: number;
    descount?: number;
    like: boolean;
    tag?: { bg: string; color: string; text: string };
  };
}

export interface SectionPromotionProps {
  title: string;
  text: string;
  image: string;
  points: { icon: JSX.Element; title: string }[];
}
export interface SectionContactInfoProps {
  title: string;
  text: string;
  address: string;
  contacts: { icon: string; label: string }[];
  inputs: CustomInputProps[];
}

export interface ContactSupportProps {
  title: string;
  text: string;
  email: string;
  phoneNumber: string;
}

export interface SectionOtherContactsProps {
  title: string;
  text: string;
  contactsLink: {
    icon: JSX.Element;
    text: string;
    link: string;
    color: string;
  }[];
  address: string;
}
export interface NotFoundProps {
  title: string;
  text: string;
  button: string;
  input: CustomInputProps;
}
export interface SimpleCardProps {
  image: string;
  text: string;
  button: string;
  title: string;
}
export interface SectionPrincipalServicesProps {
  title: string;
  text: string;
  cards: SimpleCardProps[];
}
export interface CardPriceProps {
  price: string;
  descount: string;
  title: string;
}
export interface PriceOptionProps {
  title: string;
  isCheck: boolean;
  category?: string;
}
export interface PriceOptionsProps {
  categories: {
    title: string;
    active: boolean
  }[];
  items: PriceOptionProps[];
}
export interface SectionPriceProps{
  title: string,
  text: string,
  options: PriceOptionsProps,
  prices: CardPriceProps[],
}