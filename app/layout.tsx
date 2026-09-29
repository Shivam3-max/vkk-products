import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Archivo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { RFQProvider } from "@/components/RFQContext";
import RFQDrawer from "@/components/RFQDrawer";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vkkpackworld.com"),
  title: {
    default: "VKK Products — Corrugated Boxes & Packaging Manufacturer, Nalagarh",
    template: "%s · VKK Products",
  },
  description:
    "VKK Products manufactures corrugated boxes and sheets (3-ply, 5-ply, 7-ply), custom, export and industrial packaging in Nalagarh, Himachal Pradesh. Protecting Products, Building Trust.",
  keywords: [
    "corrugated boxes",
    "corrugated sheets",
    "packaging manufacturer Nalagarh",
    "3 ply 5 ply 7 ply boxes",
    "custom packaging Baddi",
    "export packaging Himachal",
  ],
  openGraph: {
    title: "VKK Products — Complete Packaging Solutions Partner",
    description: "Corrugated boxes, sheets and custom packaging manufactured in Nalagarh, Himachal Pradesh.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${archivo.variable} antialiased`}>
        {/* Ambient decorative orbs (behind content) */}
        <div className="orbs" aria-hidden="true">
          <span className="orb orb-a" />
          <span className="orb orb-b" />
          <span className="orb orb-c" />
        </div>
        <RFQProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <RFQDrawer />
          <WhatsAppFloat />
        </RFQProvider>
        {/* Inset matte frame (above content) */}
        <div className="page-frame" aria-hidden="true" />
      </body>
    </html>
  );
}
