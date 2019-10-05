import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Header from "./Header";
import PlaceList from "./pages/PlaceList";
import PlaceForm from "./place-form/PlaceForm";

export const PlacesMapContext = React.createContext({});
PlacesMapContext.displayName = "MapContext";

const libraries = ["places"];

const App = () => {
  const [isMapLoaded, setIsMapLoaded] = React.useState(false);

  return (
    <PlacesMapContext.Provider value={isMapLoaded}>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}
        libraries={libraries}
        onLoad={() => {
          setIsMapLoaded(true);
        }}
      />
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={PlaceList} />
          <Route exact path="/place/create" component={PlaceForm} />
        </main>
      </Router>
    </PlacesMapContext.Provider>
  );
};

export default App;
