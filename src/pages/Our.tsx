import { ScrollRestoration } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import { FOOTER, NAV } from "../db/db"
import Footer from "../components/Footer/Footer"
import MainOur from "../components/MainOur/MainOur"

function Our(){
  return (
    <>
      <ScrollRestoration />
      <Navigation items={NAV.items} logo={NAV.logo} info={NAV.info} />
      <MainOur />
      <Footer footer={FOOTER} />
    </>
  )
}
export default Our