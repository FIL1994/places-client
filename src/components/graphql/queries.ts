import { gql } from "apollo-boost";

export enum Queries {
  Places = "places"
}

export const PLACES = gql`
  query places {
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
