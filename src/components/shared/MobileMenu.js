import styled from 'styled-components';
import { StyledLink } from '../styledElements/Link.styled';
import { Button } from '../styledElements/Buttons.styled';
import { useGlobalContext } from '../../context/context';

const Overlay = styled.div`
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: auto;
  z-index: 2000;
  background-color: var(--white);

  @media (min-width: 800px) {
    display: none;
  }

  .menu-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 60vh;
    padding: 2rem;
    margin-top: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
    border-bottom: 0.1rem solid var(--lightGray);
  }

  .btn {
    width: 100%;
  }
`;

const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, links, scrollToTop } =
    useGlobalContext();

  const handleClick = () => {
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  if (isMobileMenuOpen) {
    return (
      <Overlay>
        <StyledMobileMenu>
          <div className='menu-content'>
            <ul className='menu-links'>
              {links.map((link) => (
                <li key={link.id}>
                  <StyledLink to={link.path} onClick={handleClick}>
                    {link.text}
                  </StyledLink>
                </li>
              ))}
            </ul>
            <Button
              primary={+true}
              to='/Pricing'
              onClick={handleClick}
              className='btn'
            >
              Get an Invite
            </Button>
          </div>
        </StyledMobileMenu>
      </Overlay>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
