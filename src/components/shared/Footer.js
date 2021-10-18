import styled from 'styled-components';
import { FlexBetween } from '../styledElements/Containers.styled';
import logo from '../../assets/shared/desktop/logolight.svg';
import { StyledLink } from '../styledElements/Link.styled';
import { ArrowLinkLight } from './ArrowLinks';
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
  const { socials, footerLinks, scrollToTop } = useGlobalContext();

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
                <StyledLink light={+true} to={link.path} onClick={scrollToTop}>
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <ArrowLinkLight text='Get an Invite' path='/Pricing' />
          <Paragraph light>Copyright 2021. All Rights Reserved.</Paragraph>
        </div>
      </FlexBetween>
      <Tag />
    </StyledFooter>
  );
};

export default Footer;
