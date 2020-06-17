import React from "react";
import Home from "./Home/Home";
import { getRouterConfig } from '../utils/router';
import { Route, Switch } from 'react-router-dom';

function App() {
    const getRouters = () => {
        return getRouterConfig().map((route, index) => {
            const props = {
                path: route.path,
                exact: route.exact,
                component: route.component
            };
            return <Route key={index} {...props} />;
        });
    };

    return (
      <Switch>{getRouters()}</Switch>
    );
}

export default App;