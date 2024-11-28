import { Button } from "../../GlobalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubcription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubcription>
        <FooterSubHeading>
        Follow our journey and get the latest updates, tips, and event ideas that will inspire your next big occasion.
        </FooterSubHeading>
        <FooterSubText>You Can Unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubcription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>About Us</FooterLinksTitle>
            <FooterLink to="/">Who We Are</FooterLink>
            <FooterLink to="/">Meet Our Team</FooterLink>
            <FooterLink to="/">Our Story</FooterLink>
            <FooterLink to="/">Discover More</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Contact</FooterLinksTitle>
            <FooterLink to="/sign-up">Get In Touch</FooterLink>
            <FooterLink to="/">Reach Out</FooterLink>
            <FooterLink to="/">Send Us a Message</FooterLink>
            <FooterLink to="/">Ask Us Anything</FooterLink>
            <FooterLink to="/">Book a Consultation</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/sign-up">Watch Our Story</FooterLink>
            <FooterLink to="/">Watch the Video</FooterLink>
            <FooterLink to="/">Watch Now</FooterLink>
            <FooterLink to="/">View Our Process </FooterLink>
            <FooterLink to="/">Watch Our Team at Work</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Social </FooterLinksTitle>
            <FooterLink to="/sign-up">Stay Connected</FooterLink>
            <FooterLink to="/">Connect With Us</FooterLink>
            <FooterLink to="/">Follow Us on Instagram</FooterLink>
            <FooterLink to="/">Join Our Social Circle</FooterLink>
            <FooterLink to="/">Follow for More Updates</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap >
          <SocialLogo to="/">
          Event-Sphere
          </SocialLogo>
          <WebsiteRights>Muhammad Aryan 2024</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
