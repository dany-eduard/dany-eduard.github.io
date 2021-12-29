import styled from 'styled-components';
import SectionWrapper from '../../../layouts/SectionWrapper';

const Greeting = styled.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`;

const NameDescriptor = styled.div`
  > h2 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
    margin-left: -0.3rem;
  }

  .descriptor {
    color: var(--primary-color-claro);
  }
`;

const Description = styled.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: 560px;
`;

const Intro = () => {
  return (
    <SectionWrapper>
      <Greeting>Hola, soy</Greeting>
      <NameDescriptor>
        <h2>Daniel Eduardo.</h2>
        {/* <h2 className="descriptor">Full-Stack Web Developer</h2> */}
        <h2 className="descriptor">Back-End Developer</h2>
      </NameDescriptor>
      <Description>
        Soy desarrollador web con experiencia en desarrollo Front-End y Back-End, con
        conocimientos en Node.js, React, Angular, Express, y muchas otras tecnologías.
      </Description>
    </SectionWrapper>
  );
};

export default Intro;
