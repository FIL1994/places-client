import { gql } from "apollo-boost";

export enum Mutations {
  DeletePlace = "DeletePlace",
  AddPlace = "AddPlace"
}

export const DELETE_PLACE = gql`
  mutation DeletePlace($placeId: ID!) {
    deletePlace(placeId: $placeId)
  }
`;

export const ADD_PLACE = gql`
  mutation AddPlace(
    $title: String!
    $description: String
    $address: String!
    $imageUrls: [String!]
    $lat: Float!
    $lng: Float!
  ) {
    addPlace(
      place: {
        title: $title
        description: $description
        address: $address
        imageUrls: $imageUrls
        lat: $lat
        lng: $lng
      }
    ) {
      id
    }
  }
`;
