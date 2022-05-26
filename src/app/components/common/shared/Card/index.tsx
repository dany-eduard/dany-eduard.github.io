import styled from 'styled-components';
import Paragraph from '../Paragraph';

interface Image {
  src: string;
  alt: string;
}

interface Props {
  image?: Image;
  name: string;
  description: string;
  technologies?: string[];
  repository: string;
  deployLink?: string;
}

const Container = styled.div`
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 3px 12px #999;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 2px 3px 12px #999;
    transform: translateY(-7px);
  }
`;

const ImagenWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
`;

const Imagen = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  padding: 1rem;

  > a {
    text-decoration: none;
    color: inherit;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--secondary-color);
`;

const Footer = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
  margin-top: 1.5rem;
`;

const Technologies = styled.small`
  color: var(--grey);
`;

const Link = styled.a`
  margin-left: 8px;
  padding: 5px 20px;
  background-color: var(--primary-color-claro);
  border-radius: 20px;
  text-decoration: none;
  color: var(--lightest-slate-color);
  font-weight: bold;
  font-size: clamp(var(--fz-xxs), 4vw, var(--fz-sm));

  &:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 960px) {
    grid-column-end: span 12;
  }

  @media (max-width: 500px) {
    grid-column-end: span 6;
  }
`;

const Card = ({ name, description, technologies, repository, deployLink, image }: Props) => {
  return (
    <Container>
      {image && (
        <ImagenWrapper>
          <Imagen src={image?.src} alt={image?.alt} />
        </ImagenWrapper>
      )}
      <Content>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <Title> {name} </Title>

          <Paragraph maxWidth="632px">{description}</Paragraph>
          <Footer>
            <Technologies>
              {technologies &&
                technologies.map((technology, index) => (
                  <span key={index}>
                    {technology}
                    {index !== technologies.length - 1 && ', '}
                  </span>
                ))}
            </Technologies>
            <Link href={repository}>Ver</Link>
          </Footer>
        </a>
      </Content>
    </Container>
  );
};

export default Card;
