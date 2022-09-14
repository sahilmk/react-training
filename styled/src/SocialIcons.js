import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyleSocialIcons } from './styled/Socailicons.styled'

export default function SocialIcons() {
  return (
    <StyleSocialIcons>
      <li>
        <a href="https://twitter.com"><FaTwitter /></a>
      </li>

      <li>
        <a href="https://facebook.com"><FaFacebook /></a>
      </li>

      <li>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </li>
    </StyleSocialIcons>
  )
}
