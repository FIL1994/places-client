import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import Header from "./Header";
import PlaceList from "./pages/places-list/PlaceList";

export const PlacesMapContext = React.createContext({});
PlacesMapContext.displayName = "MapContext";

const libraries = ["places"];

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    libraries
  });

  return (
    <PlacesMapContext.Provider value={isLoaded}>
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={PlaceList} />
        </main>
      </Router>
    </PlacesMapContext.Provider>
  );
};

export default App;
