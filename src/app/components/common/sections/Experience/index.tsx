import SectionWrapper from '../../../layouts/SectionWrapper';
import styled from 'styled-components';
import { useState } from 'react';
import { Paragraph, SectionTitle } from '../../shared';

interface TabButtonProps {
  active: boolean;
}

const Container = styled.div`
  max-width: 1160px;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
`;

const TabList = styled.div`
  float: left;
  width: 25%;
  height: 300px;

  @media (max-width: 960px) {
    float: none;
    display: flex;
    height: auto;
  }
`;

const TabButton = styled.button<TabButtonProps>`
  display: block;
  background-color: ${({ active }) => (active ? '#ccc' : 'inherit')};
  color: var(--grey);
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  font-weight: bold;

  :hover {
    background-color: #ddd;
  }

  @media (max-width: 960px) {
    padding: 12px;
    width: auto;
  }
`;

const TabContent = styled.div`
  float: left;
  padding: 20px;
  border-left: 1px ridge #ccc;
  width: 75%;
  height: 360px;
  overflow: auto;

  > h3 {
    color: var(--secondary-color);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleOpenTab = (tabId = 2) => {
    setActiveTab(tabId);
  };

  return (
    <SectionWrapper id="experience">
      <SectionTitle>Donde he trabajado</SectionTitle>
      <Container>
        <TabList>
          <TabButton onClick={() => handleOpenTab(2)} active={activeTab === 2}>
            3DVES
          </TabButton>
          <TabButton onClick={() => handleOpenTab(1)} active={activeTab === 1}>
            Devitech
          </TabButton>
          <TabButton onClick={() => handleOpenTab(0)} active={activeTab === 0}>
            Sempertex
          </TabButton>
        </TabList>

        {/** 3DVES */}
        {activeTab === 2 && (
          <TabContent id="3dves">
            <h3>Back-End Developer</h3>
            <small>
              <time dateTime="Dec. 2021 - actualidad.">Dec. 2021 - actualidad.</time>{' '}
            </small>
            <Paragraph maxWidth="632px">
              Empresa tecnológica internacional con sucursal en Bogotá, que trabaja en diferentes
              mercados verticales en el desarrollo de soluciones "IOT" y “B2B” para sectores como el
              de la construcción entre otros donde se usan estándares BIM.
            </Paragraph>
          </TabContent>
        )}

        {/** Devitech */}
        {activeTab === 1 && (
          <TabContent id="devitech">
            <h3>Front-End Web Developer | React Developer</h3>
            <small>
              <time dateTime="Mar. 2021 - Oct. 2021">Mar. 2021 - Oct. 2021</time>{' '}
            </small>
            <Paragraph maxWidth="632px">
              • Programación del lado del cliente con JavaScript, TypeScript, HTML y CSS. <br />
              • Refactorizar y modularizar componentes React. <br />
              • Crear nuevas interfaces siguiendo un diseño. <br />
              • Conectar FrontEnd con Web Services realizando peticiones HTTP para obtener diversos
              tipos de datos. <br />
              • Uso de Bootstrap y Material-UI para interface grafica. <br />
              • Uso de Axios y XMLHttpRequest para hacer peticiones HTTP. <br />
              • Uso de dayjs para manejar fechas, jspdf para crear PDFs, xlsx para archivos Excel,
              entre otras librerias. <br />
              • Soporte y capacitación a cliente externo de la compañía. <br />
            </Paragraph>
          </TabContent>
        )}

        {/** Sempertex */}
        {activeTab === 0 && (
          <TabContent id="sempertex">
            <h3>Axiliar de Soporte TI</h3>
            <small>
              <time dateTime="Oct. 2019 - Ago. 2020">Oct. 2019 - Ago. 2020</time>{' '}
            </small>
            <Paragraph maxWidth="632px">
              • Auxiliar en el montaje y mantenimiento de redes de computadores. <br />
              • Técnico operativo para soporte de sistemas informáticos y mantenimiento de
              computadores. <br />
              • Auxiliar de soporte y atención al cliente en el área de informática. <br />
              • Auxiliar de progrmación.
              <br />
            </Paragraph>
          </TabContent>
        )}
      </Container>
    </SectionWrapper>
  );
};

export default Experience;
