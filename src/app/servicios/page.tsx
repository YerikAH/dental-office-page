import { Footer, Navigation } from "@/components/globals";
import { FOOTER, NAVIGATION } from "@/config";
import { Main } from "./components";

export default function Services() {
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
