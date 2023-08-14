export interface NavigationItems {
  path: string;
  label: string;
  active: boolean;
}
export interface SocialMedia {
  media: string;
  url: string;
}
export interface Contacts{
  label: string
  icon: string
}
export interface Service{
  image: string,
  name: string,
  active: boolean
}
export interface Product{
  name: string;
  price: number;
  image: string;
  id: number;
}