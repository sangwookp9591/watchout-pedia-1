import React from 'react';
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import TvPage from './pages/TvPage';
import TvDetail from './pages/TvDetail';

import LoginModal from './features/app/LoginModal';
import SignupModal from './features/app/SignupModal';

const slickStyles = css`
  .slick-slide {
  }
`;

const Base = styled.div``;

function App() {
  return (
    <Base>
      <Global styles={slickStyles} />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tv" component={TvPage} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/tv/:id" component={TvDetail} />
        </Switch>
      </Router>
      <LoginModal />
      <SignupModal />
    </Base>
  );
}

export default App;
