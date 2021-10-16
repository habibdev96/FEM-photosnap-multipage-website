import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.5rem;
  padding: 2rem 0;
  color: ${({ light }) => (light ? 'var(--lightGray)' : 'var(--black)')};
`;

export default Paragraph;
