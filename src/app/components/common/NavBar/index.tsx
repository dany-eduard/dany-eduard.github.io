import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../../assets/icons/logo.svg';
import MenuIcon from '../../../../assets/icons/menu.svg';
import CloseIcon from '../../../../assets/icons/close.svg';

import {
  ContainerStyles,
  LogoStyles,
  MenuItemLinkStyles,
  MenuItemStyles,
  WrapperStyles,
} from './styles';

interface MenuProps {
  open: boolean;
}

interface LogoContainerPros {
  open: boolean;
}

const Container = styled.div`
  ${ContainerStyles}
`;

const Wrapper = styled.div`
  ${WrapperStyles}
`;

const LogoContainer = styled.div`
  ${LogoStyles}
`;

const Menu = styled.ul<MenuProps>`
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
  ${MenuItemStyles}
`;

const MenuItemLink = styled.a`
  ${MenuItemLinkStyles}
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
