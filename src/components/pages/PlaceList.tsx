import * as React from "react";
import Places from "../Places";
import Map from "../Map";

interface IPlacesContext {
  selectedPlaceId: number;
  setSelectedPlaceId?: React.Dispatch<React.SetStateAction<number>>;
  map?: google.maps.Map;
  setMap?: React.Dispatch<React.SetStateAction<google.maps.Map>>;
}

export const PlacesContext = React.createContext<IPlacesContext>({
  selectedPlaceId: undefined
});
PlacesContext.displayName = "PlacesContext";

const PlaceList: React.FunctionComponent = () => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState<number>();
  const [map, setMap] = React.useState<google.maps.Map>();

  return (
    <PlacesContext.Provider
      value={{
        selectedPlaceId,
        setSelectedPlaceId,
        map,
        setMap
      }}
    >
      <Places />
      <Map />
    </PlacesContext.Provider>
  );
};

export default PlaceList;
