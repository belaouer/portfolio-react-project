import React from 'react';
import AboutUS from './pages/AboutUs';
import ContactUS from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Route, Switch, useLocation } from 'react-router-dom';
import {AnimatePresence}  from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUS/>
          </Route>
          <Route path="/work" exact>
            <OurWork/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail/>
          </Route>
          <Route path="/contact">
            <ContactUS/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
