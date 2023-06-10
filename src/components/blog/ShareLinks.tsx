import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { DefaultColor } from "@/definitions/colors";

const FB_BASE = "https://www.facebook.com/sharer/sharer.php?u=";
const TW_BASE = "https://twitter.com/intent/tweet?url=";

interface Props {
  accent_color: DefaultColor;
  primary_color: DefaultColor;
  location: Location;
}

export default function ShareLinks({ primary_color, accent_color, location }: Props) {
  const encoded = encodeURIComponent(location.href);

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
