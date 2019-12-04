import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import Header from "./header/Header";
import PlaceList from "./pages/places-list/PlaceList";
import User from "../models/User";
import PlaceLists from "./PlaceLists";

interface IAppContext {
  isMapLoaded: boolean;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AppContext = React.createContext<IAppContext>({} as any);
AppContext.displayName = "AppContext";

const libraries = ["places"];

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return undefined;
  }
}

const App = () => {
  const [user, setUser] = React.useState<User>(getUser());
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    libraries
  });

  return (
    <AppContext.Provider
      value={{
        isMapLoaded: isLoaded,
        user,
        setUser
      }}
    >
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={PlaceList} />
          <Route exact path="/places" component={PlaceLists} />
        </main>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
