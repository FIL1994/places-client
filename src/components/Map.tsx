import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { usePlaceList } from "../hooks/requestHooks";
import { PlacesContext } from "./views/places-list/PlaceList";
import "./map.less";

const Map = () => {
  const { setSelectedPlaceId, setMap, id } = React.useContext(PlacesContext);
  const { placeList } = usePlaceList(id);
  const places = placeList?.places ?? [];

  return (
    <div className="map">
      {places.length > 0 && (
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
          {places.map(({ id: placeId, lat, lng }) => (
            <Marker
              key={placeId}
              position={{ lat, lng }}
              onClick={() => {
                setSelectedPlaceId(placeId);
                const placeElement = document.querySelector(
                  `.place[data-id="${placeId}"]`
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
