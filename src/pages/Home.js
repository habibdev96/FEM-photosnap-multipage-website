import HomeHero from '../components/home/HomeHero';
import {
  HomeFeatureSectionOne,
  HomeFeatureSectionTwo,
} from '../components/home/HomeFeatureSections';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureSectionOne />
        <HomeFeatureSectionTwo />
      </main>
    </>
  );
};

export default Home;
