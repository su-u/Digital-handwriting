import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import GlobalStyle from "@/components/GlobalStyle";
import App from "@/App";
import HeaderComponent from "@/components/Header";

export default () => (
    <>
        <GlobalStyle />
        <HashRouter>
            <HeaderComponent />
            <Switch>
                <Route exact path={"/"} component={App} />
            </Switch>
        </HashRouter>
    </>
);
