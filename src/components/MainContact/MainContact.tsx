import s from "./MainContact.module.css";
import SectionContactInfo from "../SectionContactInfo/SectionContactInfo";
import ContactSupport from "../ContactSupport/ContactSupport";
import SectionMap from "../SectionMap/SectionMap";
import { SECTION_CONTACTS_INFO } from "../../db/SectionContactInfo";
import { CONTACT_SUPPORT } from "../../db/ContactSupport";

function MainContact() {
  return (
    <main className={s.main}>
      <SectionContactInfo
        inputs={SECTION_CONTACTS_INFO.inputs}
        title={SECTION_CONTACTS_INFO.title}
        text={SECTION_CONTACTS_INFO.text}
        address={SECTION_CONTACTS_INFO.address}
        contacts={SECTION_CONTACTS_INFO.contacts}
      />
      <ContactSupport
        email={CONTACT_SUPPORT.email}
        phoneNumber={CONTACT_SUPPORT.phoneNumber}
        text={CONTACT_SUPPORT.text}
        title={CONTACT_SUPPORT.title}
      />
      <SectionMap />
    </main>
  );
}
export default MainContact;
