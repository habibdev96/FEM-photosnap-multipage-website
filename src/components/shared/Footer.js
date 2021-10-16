import styled from 'styled-components';
import { FlexBetween } from '../styledElements/Containers.styled';
import logo from '../../assets/shared/desktop/logolight.svg';
import { StyledLink, ArrowLink } from '../styledElements/Link.styled';
import arrow from '../../assets/shared/desktop/arrowlight.svg';
import Paragraph from '../styledElements/Paragraphs.styled';
import Tag from './Tag';
import { useGlobalContext } from '../../context/context';

const StyledFooter = styled.footer`
  padding: 5rem 2rem 1rem 2rem;
  background-color: var(--black);

  .left {
    display: flex;
    align-items: center;
    gap: var(--gap);

    & > div {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
    }
  }

  .logo {
    width: 20rem;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .social {
    img {
      width: 2rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;

const Footer = () => {
  const { socials, footerLinks } = useGlobalContext();

  return (
    <StyledFooter>
      <FlexBetween>
        <div className='left'>
          <div>
            <img src={logo} alt='' className='logo' />
            <ul className='socials'>
              {socials.map((social) => (
                <li key={social.id}>
                  <a href='#!' className='social'>
                    <img src={social.icon} alt={social.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className='links'>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <StyledLink light={+true} to={link.path}>
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <ArrowLink light={+true} to='/Pricing'>
            <span>Get an invite</span>
            <img src={arrow} alt='' />
          </ArrowLink>
          <Paragraph light>Copyright 2021. All Rights Reserved.</Paragraph>
        </div>
      </FlexBetween>
      <Tag />
    </StyledFooter>
  );
};

export default Footer;
