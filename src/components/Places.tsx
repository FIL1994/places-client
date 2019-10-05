import * as React from "react";
import "./places.less";
import { usePlaces } from "../hooks/requestHooks";

const Places: React.FunctionComponent = () => {
  const { loading, error, places } = usePlaces();

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
    <ul className="places">
      {places.map(({ imageUrls, ...place }) => (
        <li key={place.id} className="place">
          {imageUrls && imageUrls.length > 0 && (
            <img alt={place.title} src={imageUrls[0]} height={165} />
          )}
          <div className="place--content">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Places;
