import styled from 'styled-components';
import { maxWidthLg } from '../../abstracts/Mixins';

export const FlexBetween = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
`;

export const TwoCol = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ invert }) =>
    invert ? '2fr 1.5fr' : '1.5fr 2fr'};
  gap: var(--gap);
`;

export const FourCol = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`;
