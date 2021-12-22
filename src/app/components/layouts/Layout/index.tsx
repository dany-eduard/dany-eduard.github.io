import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  gird-auto-columns: 1fr;
  grid-template-columns: 0.2fr 1.8fr;
  grid-template-rows: 0.2fr 1.8fr;
  grid-template-areas:
    'nav nav'
    'contact-bottons main';
  max-height: 100vh;
  overflow-y: hidden;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas:
      'nav'
      'main'
      'contact-bottons';
  }
`;

export const NavBarLayout = styled.div`
  grid-area: nav;
`;

export const ContactBottons = styled.div`
  grid-area: contact-bottons;
`;

export const Main = styled.main`
  grid-area: main;
  padding-left: 100px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 0px 10%;
  }
`;

export const FooterLayout = styled.div``;
