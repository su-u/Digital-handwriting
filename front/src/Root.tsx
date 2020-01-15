import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from '@/components/GlobalStyle';
import App from '@/container/App';
import QuestionContainer from '@/container/QuestionContainer';
import ScoreContainer from '@/container/Score';
import HeaderComponent from '@/components/Header';
import { Provider } from 'react-redux';

const Root = ({ store }: any) => (
  <Provider store={store}>
    <GlobalStyle />
    <HashRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/question/:id'} component={QuestionContainer} />
        <Route path={'/score'} component={ScoreContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
