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

      {/* Diga hola */}
    </SectionWrapper>
  );
};

export default Contact;
