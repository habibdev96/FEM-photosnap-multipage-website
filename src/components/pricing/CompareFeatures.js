import styled from 'styled-components';
import { MainHeading } from '../styledElements/Headings.styled';
import {
  maxWidthSm,
  sectionSpacingMd,
  headingStyles,
} from '../../abstracts/Mixins';
import check from '../../assets/pricing/desktop/check.svg';
import Responsive from '../../abstracts/Responsive';
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

    ${Responsive.sm`
      font-size: 1.1rem;
    `}
  }

  .feature {
    ${headingStyles}
    text-transform: uppercase;
    font-size: 1.2rem;

    ${Responsive.sm`
      font-size: 1rem;
    `}
  }

  .icon-container {
    ${Responsive.sm`
      text-align: center;
    `}
  }

  .icon {
    width: 2rem;

    ${Responsive.sm`
      width: 1rem;
    `}
  }
`;

const CompareFeatures = () => {
  const { compareFeatures } = useGlobalContext();

  return (
    <StyledSection data-aos='fade-in'>
      <MainHeading className='heading'>Compare</MainHeading>
      <table>
        <tbody>
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
              <td className='icon-container'>
                {feature.plans.basic && (
                  <img src={check} alt='check' className='icon' />
                )}
              </td>
              <td className='icon-container'>
                {feature.plans.pro && (
                  <img src={check} alt='check' className='icon' />
                )}
              </td>
              <td className='icon-container'>
                {feature.plans.business && (
                  <img src={check} alt='check' className='icon' />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledSection>
  );
};

export default CompareFeatures;
