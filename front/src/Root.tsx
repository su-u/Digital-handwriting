import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from '@/components/GlobalStyle';
import App from "@/container/App";
import Score from '@/container/Score';
import HeaderComponent from '@/components/Header';


export default () => (
    <>
        <GlobalStyle />
        <HashRouter>
            <HeaderComponent />
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/score'} componebt={Score} />
            </Switch>
        </HashRouter>
    </>
);
