import styled from 'styled-components';
import { MainHeading } from '../styledElements/Headings.styled';
import {
  maxWidthSm,
  sectionSpacingMd,
  headingStyles,
} from '../../abstracts/Mixins';
import check from '../../assets/pricing/desktop/check.svg';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${sectionSpacingMd}
  ${maxWidthSm}

  .heading {
    text-align: center;
    margin-bottom: 5rem;
  }

  table {
    width: 100%;
    text-align: left;
  }

  td {
    padding: 3rem 0;
    border-bottom: 0.1rem solid var(--lighterGray);
  }

  .title {
    ${headingStyles}
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  .feature {
    ${headingStyles}
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  .icon {
    width: 2rem;
  }
`;

const CompareFeatures = () => {
  const { compareFeatures } = useGlobalContext();

  return (
    <StyledSection>
      <MainHeading className='heading'>Compare</MainHeading>
      <table>
        <tr>
          {compareFeatures[0].map((title) => (
            <th key={title.id} className='title'>
              {title.title}
            </th>
          ))}
        </tr>
        {compareFeatures[1].map((feature) => (
          <tr key={feature.id}>
            <td className='feature'>{feature.feature}</td>
            <td>
              {feature.plans.basic && (
                <img src={check} alt='check' className='icon' />
              )}
            </td>
            <td>
              {feature.plans.pro && (
                <img src={check} alt='check' className='icon' />
              )}
            </td>
            <td>
              {feature.plans.business && (
                <img src={check} alt='check' className='icon' />
              )}
            </td>
          </tr>
        ))}
      </table>
    </StyledSection>
  );
};

export default CompareFeatures;
