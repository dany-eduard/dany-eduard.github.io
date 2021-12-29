import styled from 'styled-components';
import SectionWrapper from '../../../layouts/SectionWrapper';
import { Paragraph } from '../../shared';

const Greeting = styled.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.div`
  > h3 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--secondary-color);
  font-size: clamp(var(--fz-xxs), 8vw, var(--fz-lg));
  font-weight: 500;
  border: 3px solid var(--primary-color-claro);
  border-radius: 3px;
  padding: 0.7rem 1.2rem;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    background-color: var(--primary-color-gradient);
  }
`;

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <Greeting>¿Qué es lo siguiente?</Greeting>
      <SubTitle>
        <h3>Contactame...</h3>
      </SubTitle>
      <Paragraph maxWidth="632px">
        Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada está
        siempre abierta. Tanto si tienes una pregunta como si sólo quieres saludar, haré lo posible
        por responderte.
      </Paragraph>
      <ContainerLinks>
        <ContactLink href="mailto:danyeduard17@gmail.com" target="_blank" rel="noopener noreferrer">
          Di hola en Gmail
        </ContactLink>
        <ContactLink href="tel:+573017496696">Llamame</ContactLink>
        <ContactLink href="https://wa.link/1bdf5b" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </ContactLink>
      </ContainerLinks>
    </SectionWrapper>
  );
};

export default Contact;
