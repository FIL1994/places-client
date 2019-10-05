import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import PlaceList from "./pages/PlaceList";

const App = () => (
  <>
    <Header />
    <main>
      <Router>
        <Route exact path="/" component={PlaceList} />
      </Router>
    </main>
  </>
);

export default App;
