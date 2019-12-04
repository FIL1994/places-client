import { useQuery, QueryHookOptions, useMutation } from "@apollo/react-hooks";
import Place from "../models/Place";
import { PLACES, Queries, PLACE_LISTS } from "../graphql/queries";
import { DELETE_PLACE, ADD_PLACE, LOGIN, SIGNUP } from "../graphql/mutations";
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

export const useDeletePlace = () =>
  useMutation(DELETE_PLACE, {
    refetchQueries: [Queries.Places]
  });

export const useAddPlace = () =>
  useMutation(ADD_PLACE, {
    refetchQueries: [Queries.Places]
  });

export const useSignIn = () => useMutation(LOGIN);

export const useSignup = () => useMutation(SIGNUP);
