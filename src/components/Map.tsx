import * as React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { PlacesMapContext } from "./App";
import "./map.less";

const Map = () => {
  const isMapLoaded = React.useContext(PlacesMapContext);

  return (
    <div className="map">
      {isMapLoaded && (
        <GoogleMap
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
          }}
        />
      )}
    </div>
  );
};

export default Map;
