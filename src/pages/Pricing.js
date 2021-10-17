import SectionHero from '../components/shared/SectionHero';
import bg from '../assets/pricing/desktop/hero.jpg';

const Pricing = () => {
  return (
    <>
      <SectionHero
        title='Pricing'
        description='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        bg={bg}
      />
    </>
  );
};

export default Pricing;
