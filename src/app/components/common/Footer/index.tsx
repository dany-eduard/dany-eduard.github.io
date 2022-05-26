import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: var(--transparent-background);
  backdrop-filter: blur(23px);
  // position: absolute;
  bottom: 0;
  left: 0;
`;

const FooterComponet = () => {
  return <Footer>Designed & Built by Daniel Eduardo Almagro</Footer>;
};

export default FooterComponet;
