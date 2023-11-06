import s from './MainContact.module.css'
import SectionContact from "../SectionContact/SectionContact";
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import SectionNumbers from "../SectionNumbers/SectionNumbers";
import { CONTACT, FIND_US, NUMBERS } from "../../db/db";


function MainContact() {
  return (
    <main className={s.main}>
      <SectionContact inputs={CONTACT.inputs} text={CONTACT.text} title={CONTACT.title}/>
      <SectionFindUs
        items={FIND_US.items}
        title={FIND_US.title}
        text={FIND_US.text}
        tag={FIND_US.tag}
      />
      <SectionNumbers ITEMS={NUMBERS}/>
    </main>
  )
}
export default MainContact;