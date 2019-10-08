import * as React from "react";
import "./places.less";
import { usePlaces } from "../hooks/requestHooks";
import { PlacesContext } from "./pages/PlaceList";
import { onEnter } from "../utils/helpers";

const Places: React.FunctionComponent = () => {
  const { loading, error, places } = usePlaces();
  const { setSelectedPlaceId, selectedPlaceId, map } = React.useContext(
    PlacesContext
  );
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
    <ul ref={placesRef} className="places">
      {places.map(({ imageUrls, ...place }) => {
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
            {imageUrls && imageUrls.length > 0 && (
              <img alt={place.title} src={imageUrls[0]} height={165} />
            )}
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
