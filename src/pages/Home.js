import HomeHero from '../components/home/HomeHero';
import {
  HomeFeatureSectionOne,
  HomeFeatureSectionTwo,
} from '../components/home/HomeFeatureSections';
import TopStories from '../components/home/TopStories';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureSectionOne />
        <HomeFeatureSectionTwo />
        <TopStories />
      </main>
    </>
  );
};

export default Home;
