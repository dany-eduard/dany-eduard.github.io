import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/img/logo.svg';
import MenuIcon from '../../../assets/img/menu.svg';
import CloseIcon from '../../../assets/img/close.svg';

interface MenuProps {
  open: boolean;
}

interface LogoContainerPros {
  open: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffff00;
  z-index: 1;
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
  font-family: 'Roboto', sans-serif;

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
    background: rgba(255, 255, 255, 0.15);
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
  color: #7510f7;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #290755;
    border-bottom: 1px solid #290755;
    transition: 1s all ease;
  }

  &.btn_resume {
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid;
    padding: 0.75rem 1rem;
    margin: 0.5rem;

    &:hover {
      background-color: #5b1e8a41;
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
            <MenuItemLink href="#resume" className="btn_resume">
              Resume
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
