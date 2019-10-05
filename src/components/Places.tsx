import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Place from "../models/Place";
import "./places.less";

const PLACES = gql`
  {
    places {
      id
      title
      description
      imageUrls
      address
    }
  }
`;

const Places: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery<{ places: Place[] }>(PLACES);
  const places = data && data.places;

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
          {imageUrls && imageUrls.length && (
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
