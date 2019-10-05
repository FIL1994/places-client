import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Place from "../models/Place";

export const PLACES = gql`
  {
    places {
      id
      title
      description
      imageUrls
      address
      lat
      lng
    }
  }
`;

export const usePlaces = () => {
  const { loading, error, data } = useQuery<{ places: Place[] }>(PLACES);
  const places = data ? data.places : [];
  return { loading, error, places };
};
