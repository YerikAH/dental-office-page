import { Footer, Navigation } from "@/components/globals";
import { FOOTER, NAVIGATION, NOT_FOUND_SECTION } from "@/config";
import { NotFoundSection } from "./not-found/";

export default function NotFound() {
  return (
    <>
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <NotFoundSection
        button={NOT_FOUND_SECTION.button}
        input={NOT_FOUND_SECTION.input}
        text={NOT_FOUND_SECTION.text}
        title={NOT_FOUND_SECTION.title}
      />
      <Footer footer={FOOTER} />
    </>
  );
}
