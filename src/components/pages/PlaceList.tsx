import * as React from "react";
import Places from "../Places";
import Map from "../Map";

export const PlacesContext = React.createContext({});
PlacesContext.displayName = "PlacesContext";

const PlaceList: React.FunctionComponent = () => {
  return (
    <PlacesContext.Provider value={{}}>
      <Places />
      <Map />
    </PlacesContext.Provider>
  );
};

export default PlaceList;
