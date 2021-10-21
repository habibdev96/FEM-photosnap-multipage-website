import styled, { css } from 'styled-components';
import { maxWidthLg } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const FlexBetween = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);

  ${Responsive.md`
    flex-wrap: wrap;
  `}
`;

export const FlexEvenly = styled(FlexBetween)`
  justify-content: space-evenly;
`;

export const TwoCol = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ invert }) =>
    invert ? '2fr 1.5fr' : '1.5fr 2fr'};
  gap: var(--gap);

  ${Responsive.xl`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
`;

export const ThreeCol = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}

  ${({ cards }) =>
    cards &&
    css`
      ${Responsive.lg`
        grid-template-columns: 1fr;
      `}
    `}
`;

export const FourCol = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  ${Responsive.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${Responsive.xs`
    grid-template-columns: 1fr;
  `}
`;
