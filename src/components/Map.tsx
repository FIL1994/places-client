import * as React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { PlacesMapContext } from "./App";
import "./map.less";
import { usePlaces } from "../hooks/requestHooks";

const Map = () => {
  const isMapLoaded = React.useContext(PlacesMapContext);
  const { places } = usePlaces();

  return (
    <div className="map">
      {isMapLoaded && places.length > 0 && (
        <GoogleMap
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            places.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
            map.fitBounds(bounds);
          }}
        >
          {places.map(({ id, lat, lng }) => (
            <Marker key={id} position={{ lat, lng }} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
