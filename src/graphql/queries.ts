import { gql } from "apollo-boost";

export enum Queries {
  Places = "places",
  PlaceList = "placeList",
  PlaceLists = "placeLists"
}

export const PLACES = gql`
  query places {
    places {
      id
      title
      description
      imageUrl
      address
      lat
      lng
    }
  }
`;

export const PLACE_LIST = gql`
  query placeList($placeListId: ID!) {
    placeList(placeListId: $placeListId) {
      id
      user {
        id
      }
      title
      places {
        id
        title
        address
        lat
        lng
        description
        imageUrl
      }
    }
  }
`;

export const PLACE_LISTS = gql`
  query placeLists {
    placeLists {
      id
      title
      imageUrl
      places {
        id
      }
    }
  }
`;
