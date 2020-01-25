import { useQuery, QueryHookOptions, useMutation } from "@apollo/react-hooks";
import Place from "../models/Place";
import { PLACES, Queries, PLACE_LISTS, PLACE_LIST } from "../graphql/queries";
import {
  DELETE_PLACE,
  ADD_PLACE,
  LOGIN,
  SIGNUP,
  ADD_PLACE_LIST
} from "../graphql/mutations";
import PlaceList from "../models/PlaceList";

type QueryOptions<T> = QueryHookOptions<T, Record<string, any>>;

interface PlacesQueryResult {
  places: Place[];
}

export const usePlaces = (options?: QueryOptions<PlacesQueryResult>) => {
  const { loading, error, data } = useQuery<PlacesQueryResult>(PLACES, {
    displayName: "PlacesQuery",
    pollInterval: 30 * 1000,
    ...options
  });

  const places = data ? data.places : [];
  return { loading, error, places };
};

interface PlaceListsQueryResult {
  placeLists: PlaceList[];
}

export const usePlaceLists = (
  options?: QueryOptions<PlaceListsQueryResult>
) => {
  const { loading, error, data } = useQuery<PlaceListsQueryResult>(
    PLACE_LISTS,
    {
      displayName: "PlaceListsQuery",
      ...options
    }
  );

  const placeLists = data ? data.placeLists : [];
  return { loading, error, placeLists };
};

interface PlaceListQueryResult {
  placeList: PlaceList;
}

export const usePlaceList = (
  placeListId: string,
  options?: QueryOptions<PlaceListQueryResult>
) => {
  const { loading, error, data } = useQuery<PlaceListQueryResult>(PLACE_LIST, {
    displayName: "PlaceListQuery",
    ...options,
    variables: {
      placeListId,
      ...options?.variables
    }
  });

  const placeList = data ? data.placeList : null;
  return { loading, error, placeList };
};

export const useDeletePlace = () =>
  useMutation(DELETE_PLACE, {
    refetchQueries: [Queries.PlaceList]
  });

interface PlaceInput extends Omit<Place, "id" | "photoReference"> {
  placeListId: string;
}

export const useAddPlace = () =>
  useMutation<Place, PlaceInput>(ADD_PLACE, {
    refetchQueries: [Queries.PlaceList]
  });

export const useSignIn = () => useMutation(LOGIN);

export const useSignup = () => useMutation(SIGNUP);

export const useAddPlaceList = () =>
  useMutation<
    {
      addPlaceList: {
        id: string;
      };
    },
    { title: string }
  >(ADD_PLACE_LIST, {
    refetchQueries: [Queries.PlaceLists]
  });
