import SiteWrapper from "@/components/site/SiteWrapper";
import "@/styles/global.css";
import { eksellLarge, eksellSmall, silka } from "@/fonts";

export const metadata = {
  title: "Alecia.ca",
  description: "My personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${(eksellLarge.variable, eksellSmall.variable, silka.variable)} font-sans-serif`}
    >
      <body>
        <SiteWrapper>{children}</SiteWrapper>
      </body>
    </html>
  );
}
