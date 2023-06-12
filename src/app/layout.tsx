// CSS to import
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "@/styles/prismjs.css";
import "@/styles/global.css";

import { eksellLarge, eksellSmall, silka } from "@/fonts";
import { getCookie } from "cookies-next";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Alecia.ca",
  description: "My personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = getCookie("theme") ?? "dark";

  return (
    <html
      lang="en"
      className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} ${
        silka.className
      } ${theme === "dark" ? "dark" : ""}}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
