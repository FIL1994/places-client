import React from "react";
import { usePlaceList } from "../../../hooks/requestHooks";
import { PlacesContext } from "./PlaceList";
import PlaceCard from "../place-lists/PlaceCard";
import "./places.less";

const Places: React.FC = () => {
  const { setSelectedPlaceId, selectedPlaceId, map, id } = React.useContext(
    PlacesContext
  );
  const { loading, error, placeList } = usePlaceList(id);
  const places = placeList?.places ?? [];
  const placesRef = React.useRef<HTMLUListElement>();

  React.useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof HTMLElement) {
        const { current: placesEl } = placesRef;
        const isPlace = target !== placesEl && placesEl.contains(target);
        if (!isPlace) setSelectedPlaceId(undefined);
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (loading) return null;
  if (error)
    return (
      <p>
        Error!
        <br />
        {error.message}
      </p>
    );

  return (
    <ul ref={placesRef as any} className="places">
      {places.map(place => {
        const onClick = () => {
          setSelectedPlaceId(place.id);
          map.setCenter({
            lat: place.lat,
            lng: place.lng
          });
        };

        return (
          <PlaceCard
            key={place.id}
            selected={place.id === selectedPlaceId}
            place={place}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

export default Places;
