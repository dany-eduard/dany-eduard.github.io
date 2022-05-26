import styled from 'styled-components';
import SectionWrapper from '../../../layouts/SectionWrapper';
import { Card, Cards, Paragraph, SectionTitle } from '../../shared';
import projects from '../../../../constants/projects';

const Content = styled.div`
  max-width: 1160px;
  margin-top: 1rem;
`;

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Proyectos</SectionTitle>
      <Content>
        <Cards>
          {projects.map(({ name, description, technologies, repository, deployLink, image }) => (
            <Card
              key={name}
              name={name}
              description={description}
              technologies={technologies}
              repository={repository}
              deployLink={deployLink}
              image={image}
            />
          ))}
        </Cards>
      </Content>
      <Paragraph></Paragraph>
    </SectionWrapper>
  );
};

export default Projects;
