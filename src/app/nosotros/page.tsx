"use client";
import { Footer } from "@/components/globals";
import { FOOTER } from "@/config";
import { Main } from "./components";
import { WrapperNavigation } from "./components/wrapper-navigation";

export default function Our() {
  return (
    <>
      <WrapperNavigation />
      <Main />
      <Footer footer={FOOTER} />
    </>
  );
}
