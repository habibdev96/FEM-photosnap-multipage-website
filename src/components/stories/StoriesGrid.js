import styled from 'styled-components';
import StoryCard from '../shared/StoryCard';
import { FourCol } from '../styledElements/Containers.styled';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section``;

const StoriesGrid = () => {
  const { stories } = useGlobalContext();

  return (
    <StyledSection>
      <FourCol>
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </FourCol>
    </StyledSection>
  );
};

export default StoriesGrid;
