import styled from 'styled-components';
import { FourCol } from '../styledElements/Containers.styled';
import StoryCard from '../shared/StoryCard';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section``;

const TopStories = () => {
  const { stories } = useGlobalContext();

  return (
    <StyledSection>
      <FourCol>
        {stories.map((story) => {
          const { topStory } = story;
          return topStory && <StoryCard key={story.id} {...story} />;
        })}
      </FourCol>
    </StyledSection>
  );
};

export default TopStories;
