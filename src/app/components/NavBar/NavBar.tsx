import styled from 'styled-components';
import Logo from '../../../assets/img/logo.svg';

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

const Menu = styled.ul`
  heigth: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const MenuItem = styled.li`
  height: 100%;
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
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} alt="danyeduard-logo" />
        </LogoContainer>
        <Menu>
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
