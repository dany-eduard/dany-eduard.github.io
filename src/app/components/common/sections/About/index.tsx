import styled from 'styled-components';
import SectionWrapper from '../../../layouts/SectionWrapper';
import { Paragraph, SectionTitle } from '../../shared';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

const SkillsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5rem;
  margin-right: 5rem;
  list-style: square;

  @media (max-width: 600px) {
    margin-right: 2rem;
  }

  @media (max-width: 360px) {
    margin-right: 1rem;
  }

  > li {
    font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
    font-weight: 400;
    font-family: var(--code-fonts);
    color: var(--secondary-color);
    line-height: 0.2;
    margin-top: 1rem;
    max-width: 645px;

    ::marker {
      color: var(--primary-color);
      font-size: 1.2rem;
    }
  }
`;

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle>Sobre mí</SectionTitle>
      <Paragraph maxWidth="645px">
        Mi nombre es Daniel Eduardo Almagro y disfruto de crear cosas para la Web. Mi interés por el
        desarrollo comenzó en el <time dateTime="2018">2018</time> cuando empecé a estudiar Mant. de
        Sistemas Informáticos. Actualmente conozco sobre muchos temas, pero considero que aún tengo
        un largo camino por recorrer y así mismo muchísimas cosas que aprender y otras por mejorar.
      </Paragraph>
      <Paragraph maxWidth="645px">
        Me considero una persona responsable y con habilidad para el trabajo en equipo. Me gusta
        aprender cosas nuevas y una buena forma de hacerlo es escuchando a otras personas. Tambien
        me considero una persona resiliente y me gusta aceptar nuevos retos y probar mejores formas
        de hacer las cosas.
      </Paragraph>
      <Paragraph maxWidth="645px">
        Mi primera experiencia laboral fue como desarrollador Front-End, utilizando React y
        Typescript y fue bastante agradable el equipo con el que compartí buenos momentos.
        Actualmente me enfoco principalmente en el desarrollo Back-End con Node.js.
      </Paragraph>
      <Paragraph>Aquí algunas tecnologías con las que he trabajado:</Paragraph>
      <ListWrapper>
        <SkillsList>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>JavaScript</li>
        </SkillsList>
        <SkillsList>
          <li>Typescript</li>
          <li>React</li>
          <li>MUI</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>Node.js</li>
        </SkillsList>
        <SkillsList>
          <li>Express</li>
          <li>NestJs</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Git</li>
        </SkillsList>
      </ListWrapper>
    </SectionWrapper>
  );
};

export default About;
