import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import PlaceList from "./pages/PlaceList";
import PlaceForm from "./place-form/PlaceForm";

const App = () => (
  <Router>
    <Header />
    <main>
      <Route exact path="/" component={PlaceList} />
      <Route exact path="/place/create" component={PlaceForm} />
    </main>
  </Router>
);

export default App;
