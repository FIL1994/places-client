import { gql } from "apollo-boost";

export enum Queries {
  Places = "places",
  PlaceLists = "placeLists"
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

export const PLACE_LISTS = gql`
  query placeLists {
    placeLists {
      id
      title
      places {
        id
      }
    }
  }
`;
