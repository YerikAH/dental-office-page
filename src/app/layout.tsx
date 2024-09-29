import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { StyledEngineProvider } from "@mui/material/styles";
// import { WhatsAppButton } from "@/components/globals";
// import { WHATSAPP_BUTTON } from "@/config";

export const metadata: Metadata = {
  title: "Inicio - La preventiva",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <StyledEngineProvider injectFirst>
        <body>{children}</body>
      </StyledEngineProvider>
    </html>
  );
}