import React from "react";
import { usePlaceList } from "../../../hooks/requestHooks";
import { PlacesContext } from "./PlaceList";
import { onEnter } from "../../../utils/helpers";
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
      {places.map(({ imageUrl, ...place }) => {
        const onClick = () => {
          setSelectedPlaceId(place.id);
          map.setCenter({
            lat: place.lat,
            lng: place.lng
          });
        };

        return (
          /* eslint-disable */
          <li
            key={place.id}
            data-id={place.id}
            className={`place ${
              place.id === selectedPlaceId ? "selected" : ""
            }`}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onEnter(onClick)}
          >
            {/* eslint-enable */}
            {imageUrl && <img alt={place.title} src={imageUrl} height={165} />}
            <div className="place--content">
              <h2>{place.title}</h2>
              <h3>{place.address}</h3>
              <p>{place.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Places;
