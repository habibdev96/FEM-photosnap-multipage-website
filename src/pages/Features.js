import SectionHero from '../components/shared/SectionHero';
import bg from '../assets/features/desktop/hero.jpg';
import FeaturesFeatureCards from '../components/features/FeaturesFeatureCards';

const Features = () => {
  return (
    <>
      <SectionHero
        title='Features'
        description='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        bg={bg}
      />
      <main>
        <FeaturesFeatureCards />
      </main>
    </>
  );
};

export default Features;
