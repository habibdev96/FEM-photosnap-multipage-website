import StoryCard from '../shared/StoryCard';
import { FourCol } from '../styledElements/Containers.styled';
import { useGlobalContext } from '../../context/context';

const StoriesGrid = () => {
  const { stories } = useGlobalContext();

  return (
    <section>
      <FourCol>
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </FourCol>
    </section>
  );
};

export default StoriesGrid;
