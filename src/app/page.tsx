import { NAVIGATION, FOOTER, WHATSAPP_BUTTON } from "@/config";
import { Main } from "@/app/components";
import { Footer, Navigation, WhatsAppButton } from "@/components/globals";

export default function Home() {
  return (
    <>
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <Main />
      <Footer footer={FOOTER} />
      <WhatsAppButton
        chats={WHATSAPP_BUTTON.chats}
        logo={WHATSAPP_BUTTON.logo}
        text={WHATSAPP_BUTTON.text}
        textTwo={WHATSAPP_BUTTON.textTwo}
        title={WHATSAPP_BUTTON.title}
      />
    </>
  );
}
