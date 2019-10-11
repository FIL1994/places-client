import * as React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { AppContext } from "./App";
import "./map.less";
import { usePlaces } from "../hooks/requestHooks";
import { PlacesContext } from "./pages/places-list/PlaceList";

const Map = () => {
  const isMapLoaded = React.useContext(AppContext);
  const { setSelectedPlaceId, setMap } = React.useContext(PlacesContext);
  const { places } = usePlaces();

  return (
    <div className="map">
      {isMapLoaded && places.length > 0 && (
        <GoogleMap
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            places.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
            map.fitBounds(bounds);
            setMap(map);
          }}
          options={{
            mapTypeControl: false
          }}
        >
          {places.map(({ id, lat, lng }) => (
            <Marker
              key={id}
              position={{ lat, lng }}
              onClick={() => {
                setSelectedPlaceId(id);
                const placeElement = document.querySelector(
                  `.place[data-id="${id}"]`
                );
                placeElement.scrollIntoView();
              }}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
