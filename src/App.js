import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

// Switch will make sure you only render one component

// You can set route path with / or * , to match all the routing.

// pass the exact , so it'll rendered only if the path matches

// You can change the BrowserRouter with just Router with alias : import { BrowserRouter as Router }...

export default App;
