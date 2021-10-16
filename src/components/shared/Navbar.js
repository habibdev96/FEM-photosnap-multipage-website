import styled from 'styled-components';
import { FlexBetween } from '../styledElements/Containers.styled';
import logo from '../../assets/shared/desktop/logo.svg';
import { StyledLink } from '../styledElements/Link.styled';
import { Button } from '../styledElements/Buttons.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const StyledNav = styled.nav`
  ${maxWidthLg}
  padding: 2rem;

  .logo {
    width: 20rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Navbar = () => {
  const { links } = useGlobalContext();

  return (
    <StyledNav>
      <FlexBetween>
        <Link to='/'>
          <img src={logo} alt='photosnap logo' className='logo' />
        </Link>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <StyledLink to={link.path}>{link.text}</StyledLink>
            </li>
          ))}
        </ul>
        <Button to='/Pricing' primary={+true}>
          Get an invite
        </Button>
      </FlexBetween>
    </StyledNav>
  );
};

export default Navbar;
