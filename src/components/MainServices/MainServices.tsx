import { SECTION_PRICE } from "../../db/SectionPrice";
import { SECTION_PRINCIPAL_SERVICES } from "../../db/SectionPrincipalServices";
import { SECTION_SERVICES } from "../../db/SectionService";
import SectionPrice from "../SectionPrice/SectionPrice";
import SectionPrincipalServices from "../SectionPrincipalServices/SectionPrincipalServices";
import SectionService from "../SectionService/SectionService";

function MainServices() {
  return (
    <main>
      <SectionPrincipalServices
        title={SECTION_PRINCIPAL_SERVICES.title}
        text={SECTION_PRINCIPAL_SERVICES.text}
        cards={SECTION_PRINCIPAL_SERVICES.cards}
      />
      <SectionPrice
        options={SECTION_PRICE.options}
        prices={SECTION_PRICE.prices}
        text={SECTION_PRICE.text}
        title={SECTION_PRICE.title}
      />
      <SectionService
        title={SECTION_SERVICES.title}
        text={SECTION_SERVICES.text}
        items={SECTION_SERVICES.items}
      />
    </main>
  );
}
export default MainServices;
