import styled from 'styled-components';
import { FlexBetween } from '../styledElements/Containers.styled';
import logo from '../../assets/shared/desktop/logo.svg';
import { StyledLink } from '../styledElements/Link.styled';
import { Button } from '../styledElements/Buttons.styled';
import { Link } from 'react-router-dom';
import MobileMenuToggler from './MobileMenuToggler';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 2rem;
  z-index: 3000;
  background: var(--white);

  .logo {
    width: 20rem;

    ${Responsive.md`
      width: 15rem;
    `}
  }

  .links {
    display: flex;
    align-items: center;
    gap: var(--gap);

    ${Responsive.md`
      display: none;
    `}
  }

  .btn {
    ${Responsive.md`
      display: none;
    `}
  }
`;

const Navbar = () => {
  const { links, scrollToTop } = useGlobalContext();

  return (
    <StyledNav>
      <FlexBetween>
        <Link to='/' onClick={scrollToTop}>
          <img src={logo} alt='photosnap logo' className='logo' />
        </Link>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <StyledLink to={link.path} onClick={scrollToTop}>
                {link.text}
              </StyledLink>
            </li>
          ))}
        </ul>
        <Button
          to='/Pricing'
          primary={+true}
          onClick={scrollToTop}
          className='btn'
        >
          Get an invite
        </Button>
        <MobileMenuToggler />
      </FlexBetween>
    </StyledNav>
  );
};

export default Navbar;
