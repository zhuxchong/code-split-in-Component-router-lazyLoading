import React from "react";
import D from "./D";
import A from "./A";
import Home from "./home";
import asyncCom from "./AsyncComponent";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  const AsyncComponentC = asyncCom(() => import("./C"));
  const AsyncComponentB = asyncCom(() => import("./B"));
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a" exact component={A} />
          <Route path="/d" exact component={D} />
          <Route path="/b" exact component={AsyncComponentB} />
          <Route path="/c" exact component={AsyncComponentC} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
