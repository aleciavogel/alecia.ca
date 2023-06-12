// CSS to import
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "@/styles/prismjs.css";
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
      className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} ${silka.className}`}
    >
      <body>
        <script src="/noflash.js" />
        {children}
      </body>
    </html>
  );
}
