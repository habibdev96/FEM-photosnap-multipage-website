import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navbar from './components/shared/Navbar';

const App = () => {
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
      </Router>
    </>
  );
};

export default App;
