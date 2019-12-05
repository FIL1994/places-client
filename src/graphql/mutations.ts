import { gql } from "apollo-boost";

export enum Mutations {
  DeletePlace = "DeletePlace",
  AddPlace = "AddPlace",
  AddPlaceList = "AddPlaceList"
}

export const DELETE_PLACE = gql`
  mutation DeletePlace($placeId: ID!) {
    deletePlace(placeId: $placeId)
  }
`;

export const ADD_PLACE = gql`
  mutation AddPlace(
    $title: String!
    $address: String!
    $lat: Float!
    $lng: Float!
    $description: String
    $imageUrls: [String!]
    $placeListId: ID!
  ) {
    addPlace(
      place: {
        title: $title
        description: $description
        address: $address
        imageUrls: $imageUrls
        lat: $lat
        lng: $lng
        placeListId: $placeListId
      }
    ) {
      id
    }
  }
`;

export const ADD_PLACE_LIST = gql`
  mutation AddPlaceList($title: String!) {
    addPlaceList(placeList: { title: $title }) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(user: { email: $email, password: $password }) {
      token
      user {
        id
        email
        nickname
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!, $nickname: String) {
    signup(user: { email: $email, password: $password, nickname: $nickname }) {
      id
      email
      nickname
    }
  }
`;
