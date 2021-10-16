import HomeHero from '../components/home/HomeHero';
import {
  HomeFeatureSectionOne,
  HomeFeatureSectionTwo,
} from '../components/home/HomeFeatureSections';
import TopStories from '../components/home/TopStories';
import HomeFeatureCards from '../components/home/HomeFeatureCards';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureSectionOne />
        <HomeFeatureSectionTwo />
        <TopStories />
        <HomeFeatureCards />
      </main>
    </>
  );
};

export default Home;
