import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from '@/components/GlobalStyle';
import App from '@/container/App';
import Question from '@/container/Question';
import ScoreContainer from '@/container/Score';
import HeaderComponent from '@/components/Header';

const Root = () => (
  <>
    <GlobalStyle />
    <HashRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/question/:id'} component={Question} />
        <Route path={'/score'} component={ScoreContainer} />
      </Switch>
    </HashRouter>
  </>
);

export default Root;
