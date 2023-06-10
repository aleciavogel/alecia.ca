import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
