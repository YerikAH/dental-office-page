import { Footer, Navigation } from "@/components/globals";
import { NAVIGATION, FOOTER } from "@/config";
import { Main } from "./components";

export default function Reserve() {
  return (
    <>
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <Main />
      <Footer footer={FOOTER} />
    </>
  );
}
