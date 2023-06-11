"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { DefaultColor } from "@/definitions/colors";
import { usePathname } from "next/navigation";

const FB_BASE = "https://www.facebook.com/sharer/sharer.php?u=";
const TW_BASE = "https://twitter.com/intent/tweet?url=";

interface Props {
  accent_color: DefaultColor;
  primary_color: DefaultColor;
}

export default function ShareLinks({ primary_color, accent_color }: Props) {
  // Retrieve the current absolute url of the page for nextjs
  const pathname = usePathname();
  const encoded = encodeURIComponent(process.env.BASE_URL + pathname);

  return (
    <div className={`share-links text-${primary_color}-600`}>
      <a
        href={FB_BASE + encoded} // TODO: fix
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href={TW_BASE + encoded}
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href="/" // TODO: add email body
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
