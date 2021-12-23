import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../../assets/icons/logo.svg';
import MenuIcon from '../../../../assets/icons/menu.svg';
import CloseIcon from '../../../../assets/icons/close.svg';

interface MenuProps {
  open: boolean;
}

interface LogoContainerPros {
  open: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`;

const Wrapper = styled.div`
  // width: 100%;
  // max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`;

const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--primary-fonts);

  & > img {
    width: 100%;
    height: 70px;
  }
`;

const Menu = styled.ul<MenuProps>`
  // height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 960px) {
    background: var(--transparent-background);
    backdrop-filter: blur(23px);
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
`;

const MenuItem = styled.li`
  height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`;

const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: var(--primary-color);
  font-family: var(--primary-fonts);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    transition: 1s all ease;
  }

  &.btn_resume {
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid;
    padding: 0.75rem 1rem;
    margin: 0.5rem;

    &:hover {
      background-color: var(--secondary-color-transparent);
    }
  }

  @media (max-width: 960px) {
    // width: 16%;
  }
`;

const MobileIcon = styled.div<LogoContainerPros>`
  display: none;
  @media (max-width: 960px) {
    background-image: url(${({ open }) => (!open ? MenuIcon : CloseIcon)});
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
  }
`;

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} alt="danyeduard-logo" />
        </LogoContainer>
        <MobileIcon open={showMobileMenu} onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {!showMobileMenu ? (
            <img src={MenuIcon} alt="menu-icon" />
          ) : (
            <img src={CloseIcon} alt="close-icon" />
          )}
        </MobileIcon>
        <Menu open={showMobileMenu} onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <MenuItem>
            <MenuItemLink href="#about">Sobre mí</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#experience">Experiencia</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#projects">Proyectos</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#contact">Hablame</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="https://drive.google.com/file/d/12BVXeru5dv3Gjlf08ffL1NiLWN0yVz2h/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_resume">
              Resume
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
