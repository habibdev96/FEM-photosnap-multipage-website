import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

// TODO: make responsive | mobile menu

const App = () => {
  AOS.init({ offset: 100, duration: 1000, once: true });

  return (
    <>
      <Globals />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Stories' component={Stories} />
          <Route exact path='/Features' component={Features} />
          <Route exact path='/Pricing' component={Pricing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
