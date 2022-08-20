import React, { FC } from "react";
import { faTwitter, faGithub, faDribbble, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSocialLinks from "../../../hooks/useSocialLinks";

const SocialLinks: FC = () => {
  const { twitter, linkedIn, github, dribbble } = useSocialLinks();

  return (
    <div id="footer-links">
      <a href={`https://github.com/${github}`}>
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href={`https://linkedin.com/in/${linkedIn}`}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href={`https://dribbble.com/${dribbble}`}>
        <FontAwesomeIcon icon={faDribbble} />
      </a>

      <a href={`https://twitter.com/${twitter}`}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default SocialLinks;
