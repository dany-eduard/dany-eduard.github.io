import styled from 'styled-components';

interface Props {
  maxWidth?: string;
}

const Paragraph = styled.p<Props>`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: ${({ maxWidth }) => maxWidth || 'max-content'};
`;

export default Paragraph;
