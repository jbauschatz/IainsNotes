import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { PrepositionAnn } from './app/grammar/preposition/preposition-ann';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { PrepositionAir } from './app/grammar/preposition/preposition-air';
import { IdiomItIsInMe } from './app/idiom/idiom-it-is-in-me';
import { IdiomIAmInMy } from './app/idiom/idiom-i-am-in-my';
import { IdiomItOnInMe } from './app/idiom/idiom-it-is-on-me';

function Home() {
  return <Container>
      <p>
        Fàilte! These are my personal study notes as a learner of Gàidhlig.
      </p>
      <p>
        This site aims to include:
        <ul>
          <li>Quick reference for common grammar</li>
          <li>Interconnected notes about idiomatic usage</li>
        </ul>
      </p>
      <p>
        This site does not aim to include:
        <ul>
          <li>Large lists of vocabulary</li>
          <li>A step-by-step or structured lesson plan</li>
        </ul>
      </p>

      <h2>Prepositions</h2>
      <ul>
        <li>
          <LinkContainer to="/grammar/preposition/air(on)">
            <a>air (on)</a>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/grammar/preposition/ann(in)">
            <a>ann (in)</a>
          </LinkContainer>
        </li>
      </ul>

      <h2>Idioms</h2>
      <p>
        This section is an incomplete catalog of idioms - Gàidhlig grammatical constructions that can't be understood just from knowing the individual words.
      </p>
      <p>
        Each idiom is listed below with a primary example in Gàidhlig and English, but more details are found by following the link.
      </p>
      <p>
        <ul>
          <li>
            <LinkContainer to="/idiom/ItIsOnMe">
              <a>Tha an t-acras orm (The hunger is upon me)</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/idiom/IAmInMy">
              <a>Tha mi nam thidsear (I am in my teacher)</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/idiom/ItIsInMe">
              <a>'S e tidsear a th' annam (It's a teacher that is in me)</a>
            </LinkContainer>
          </li>
        </ul>
      </p>
  </Container>
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <LinkContainer to="/">
                  <Navbar.Brand>Iain Teàrlach's Notes</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"> 
                      <LinkContainer to="/">
                          <Nav.Link>Home</Nav.Link>
                      </LinkContainer>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      
      <Routes>
            <Route path="/" element={<Home/>}/>

            {/* Grammar Pages */}
            <Route path="/grammar/preposition/ann(in)" element={<PrepositionAnn/>}/>
            <Route path="/grammar/preposition/air(on)" element={<PrepositionAir/>}/>

            {/* Idioms */}
            <Route path="/idiom/ItIsInMe" element={<IdiomItIsInMe/>}/>
            <Route path="/idiom/ItIsOnMe" element={<IdiomItOnInMe/>}/>
            <Route path="/idiom/IAmInMy" element={<IdiomIAmInMy/>}/>
        </Routes>
    </Router>
  );
}

export default App;
