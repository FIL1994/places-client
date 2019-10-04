import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Place from "../models/Place";

const PLACES = gql`
  {
    places {
      id
      title
      description
      imageUrls
    }
  }
`;

export default function Places() {
  const { loading, error, data } = useQuery<{ places: Place[] }>(PLACES);
  const places = data && data.places;

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error!
        <br /> {error.message}
      </p>
    );

  console.log("places", places);

  return (
    <ul>
      {places.map(p => (
        <li key={p.id}>
          {p.title} - {p.address}
        </li>
      ))}
    </ul>
  );
}
