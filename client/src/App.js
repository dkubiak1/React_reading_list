import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import Router from "../../routes/index";
//import Route from "../../routes/api/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <div>
      <Nav />
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={Detail} />
      <Route exact path="*" component={NoMatch} />
      </div>
    </Router>
  </div>
);

export default App;
