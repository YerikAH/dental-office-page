import s from './MainContact.module.css'
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import SectionNumbers from "../SectionNumbers/SectionNumbers";
import { CONTACT, CONTACT_SUPPORT, FIND_US, NUMBERS, SECTION_CONTACTS_INFO } from "../../db/db";
import SectionContactInfo from '../SectionContactInfo/SectionContactInfo';
import ContactSupport from '../ContactSupport/ContactSupport';


function MainContact() {
  return (
    <main className={s.main}>
      <SectionContactInfo inputs={CONTACT.inputs} title={SECTION_CONTACTS_INFO.title} text={SECTION_CONTACTS_INFO.text} address={SECTION_CONTACTS_INFO.address} contacts={SECTION_CONTACTS_INFO.contacts}/>
      <ContactSupport email={CONTACT_SUPPORT.email} phoneNumber={CONTACT_SUPPORT.phoneNumber} text={CONTACT_SUPPORT.text} title={CONTACT_SUPPORT.title}/>
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