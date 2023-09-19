import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialLinks: FC = () => {
  return (
    <div id="footer-links">
      <a
        href={`https://github.com/aleciavogel`}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow me on GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href={`https://linkedin.com/in/alecia-vogel`}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow me on LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href={`https://dribbble.com/aleciavogel`}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow me on Dribbble"
      >
        <FontAwesomeIcon icon={faDribbble} />
      </a>

      <a
        href={`https://twitter.com/aleciavogel`}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow me on Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  )
}

export default SocialLinks
