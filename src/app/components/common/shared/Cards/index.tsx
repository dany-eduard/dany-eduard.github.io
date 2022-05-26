import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode | ReactNode[];
}

const CardsWrapper = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 38px));
  grid-gap: 30px;

  @media (max-width: 960px) {
    grid-column: 2 / span 6;
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 20px;
  }

  @media (max-width: 620px) {
    grid-column: 1 / span 6;
    grid-template-columns: 10px repeat(1, 1fr) 10px;
  }
`;

const Cards = ({ children }: Props) => {
  return <CardsWrapper>{children}</CardsWrapper>;
};

export default Cards;
