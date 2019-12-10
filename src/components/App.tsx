import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import Header from "./header/Header";
import User from "../models/User";
import Routes from "./Routes";

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
          <Routes />
        </main>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
