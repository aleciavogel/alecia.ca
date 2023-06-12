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
  title: string;
}

export default function ShareLinks({ primary_color, accent_color, title }: Props) {
  // Retrieve the current absolute url of the page for nextjs
  const pathname = usePathname();
  const encoded = encodeURIComponent(process.env.NEXT_PUBLIC_BASE_URL + pathname);
  const emailBody = encodeURIComponent(
    "Hey! Check out this article on Alecia.ca: " + process.env.NEXT_PUBLIC_BASE_URL + pathname,
  );
  const emailSubject = encodeURIComponent(title);

  return (
    <div className={`share-links text-${primary_color}-600`}>
      <a
        href={FB_BASE + encoded} // TODO: fix
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href={TW_BASE + encoded}
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
        className={`dark:text-${primary_color}-400 hover:text-${accent_color}-600 dark:hover:text-${accent_color}-400`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
