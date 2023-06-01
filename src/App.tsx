import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { PREPOSITION_ANN_RESOURCE_PATH, PrepositionAnn, PrepositionAnnNavItem } from './app/grammar/preposition/preposition-ann';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { PREPOSITION_AIR_RESOURCE_PATH, PrepositionAir, PrepositionAirNavItem } from './app/grammar/preposition/preposition-air';
import { IDIOM_IT_IS_IN_ME_RESOURCE_PATH, IdiomItIsInMe, IdiomItIsInMeNavItem } from './app/idiom/idiom-it-is-in-me';
import { IDIOM_I_AM_IN_MY_RESOURCE_PATH, IdiomIAmInMy, IdiomIamInMyNavItem } from './app/idiom/idiom-i-am-in-my';
import { IDIOM_IT_IS_ON_ME_RESOURCE_PATH, IdiomItIsOnMeNavItem, IdiomItIsOnMe } from './app/idiom/idiom-it-is-on-me';
import { IDIOM_MY_LOVE_IS_ON_RESOURCE_PATH, IdiomMyLoveIsOn, IdiomMyLoveIsOnNavItem } from './app/idiom/idiom-my-love-on-you';
import { PREPOSITION_AIG_RESOURCE_PATH, PrepositionAig, PrepositionAigNavItem } from './app/grammar/preposition/preposition-aig';
import { IDIOM_STATIVE_VERB_RESOURCE_PATH, IdiomStativeVerb, IdiomStativeVerbNavItem } from './app/idiom/idiom-stative-verb';
import { IDIOM_KEEN_ON_RESOURCE_PATH, IdiomKeenOn, IdiomKeenOnNavItem } from './app/idiom/idiom-keen-on';
import { IDIOM_PREFERS_IS_FHEARR_LE_RESOURCE_PATH, IdiomPrefersIsFhearrLe, IdiomPrefersIsFhearrLeNavItem } from './app/idiom/idiom-prefers-is-fhearr-le';
import { PREPOSITION_LE_RESOURCE_PATH, PrepositionLe, PrepositionLeNavItem } from './app/grammar/preposition/preposition-le';
import { NavList } from './app/component/navigation/nav-list';
import { IDIOM_I_AM_RESOURCE_PATH, IdiomIAm, IdiomIAmNavItem } from './app/idiom/idiom-i-am';
import { IDIOM_THE_NAME_THAT_IS_ON_RESOURCE_PATH, IdiomTheNameThatIsOn, IdiomTheNameThatIsOnNavItem } from './app/idiom/idiom-the-name-that-is-on-me';

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
      <NavList>
        <PrepositionAigNavItem/>
        <PrepositionAirNavItem/>
        <PrepositionAnnNavItem/>
        <PrepositionLeNavItem/>
      </NavList>

      <h2>Idioms</h2>
      <p>
        This section is an incomplete catalog of idioms - Gàidhlig grammatical constructions that can't be understood just from knowing the individual words.
      </p>
      <p>
        Each idiom is listed below with a primary example in Gàidhlig and English, but more details are found by following the link.
      </p>
      <p>
        <NavList>
          <IdiomIAmNavItem/>
          <IdiomIamInMyNavItem/>
          <IdiomItIsInMeNavItem/>
          <IdiomTheNameThatIsOnNavItem/>
          <IdiomItIsOnMeNavItem/>
          <IdiomKeenOnNavItem/>
          <IdiomMyLoveIsOnNavItem/>
          <IdiomPrefersIsFhearrLeNavItem/>
          <IdiomStativeVerbNavItem/>
        </NavList>
      </p>

      <h3>Idioms for Identity or Occupation</h3>
      <p>
        <NavList>
          <IdiomIAmNavItem/>
          <IdiomTheNameThatIsOnNavItem/>
          <IdiomItIsInMeNavItem/>
          <IdiomIamInMyNavItem/>
        </NavList>
      </p>
      
      <h3>Idioms for State or Condition</h3>
      <p>
        <NavList>
          <IdiomIamInMyNavItem/>
          <IdiomStativeVerbNavItem/>
          <IdiomItIsOnMeNavItem/>
        </NavList>
      </p>

      <h3>Idioms for Liking or Preferring</h3>
      <p>
        <NavList>
          <IdiomMyLoveIsOnNavItem/>
          <IdiomKeenOnNavItem/>
          <IdiomPrefersIsFhearrLeNavItem/>
        </NavList>
      </p>
  </Container>
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <LinkContainer to="/">
                  <Navbar.Brand>
                    <FontAwesomeIcon icon={faMugHot} />
                    {' '}
                    Iain Teàrlach's Notes
                  </Navbar.Brand>
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
            <Route path={PREPOSITION_AIG_RESOURCE_PATH} element={<PrepositionAig/>}/>
            <Route path={PREPOSITION_AIR_RESOURCE_PATH} element={<PrepositionAir/>}/>
            <Route path={PREPOSITION_ANN_RESOURCE_PATH} element={<PrepositionAnn/>}/>
            <Route path={PREPOSITION_LE_RESOURCE_PATH} element={<PrepositionLe/>}/>

            {/* Idioms */}
            <Route path={IDIOM_I_AM_RESOURCE_PATH} element={<IdiomIAm/>}/>
            <Route path={IDIOM_THE_NAME_THAT_IS_ON_RESOURCE_PATH} element={<IdiomTheNameThatIsOn/>}/>
            <Route path={IDIOM_IT_IS_IN_ME_RESOURCE_PATH} element={<IdiomItIsInMe/>}/>
            <Route path={IDIOM_IT_IS_ON_ME_RESOURCE_PATH} element={<IdiomItIsOnMe/>}/>
            <Route path={IDIOM_I_AM_IN_MY_RESOURCE_PATH} element={<IdiomIAmInMy/>}/>
            <Route path={IDIOM_MY_LOVE_IS_ON_RESOURCE_PATH} element={<IdiomMyLoveIsOn/>}/>
            <Route path={IDIOM_KEEN_ON_RESOURCE_PATH} element={<IdiomKeenOn/>}/>
            <Route path={IDIOM_PREFERS_IS_FHEARR_LE_RESOURCE_PATH} element={<IdiomPrefersIsFhearrLe/>}/>
            <Route path={IDIOM_STATIVE_VERB_RESOURCE_PATH} element={<IdiomStativeVerb/>}/>
        </Routes>
    </Router>
  );
}

export default App;
