import React from "react";
import { Switch, Route } from "react-router-dom";
import PlaceList from "./pages/places-list/PlaceList";
import PlaceLists from "./PlaceLists";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlaceLists} />
      <Route exact path="/places" component={PlaceLists} />
      <Route exact path="/places/:id" component={PlaceList} />
    </Switch>
  );
};

export default Routes;
