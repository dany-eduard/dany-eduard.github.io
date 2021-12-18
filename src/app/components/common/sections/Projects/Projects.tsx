import styled from 'styled-components';
import SectionWrapper from '../../../layouts/SectionWrapper/SectionWrapper';
import { Paragraph, SectionTitle } from '../../shared';

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 65vh;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
  justify-content: space-around;
  align-items: center;

  > h3 {
    font-size: clamp(26px, 5vw, var(--fz-heading));
    font-weight: 300;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    margin-bottom: 0.8rem;
  }
`;

const Projects = () => {
  return (
    <SectionWrapper>
      <SectionTitle id="projects">Proyectos</SectionTitle>
      <Container>
        <h3>⚠ section under construction.</h3>
      </Container>
      <Paragraph></Paragraph>
    </SectionWrapper>
  );
};

export default Projects;
