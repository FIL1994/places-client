import * as React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./map.less";

const Map = () => {
  return (
    <div className="map">
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}
      >
        <GoogleMap
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
          }}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
