import { useQuery, QueryHookOptions, useMutation } from "@apollo/react-hooks";
import Place from "../models/Place";
import { PLACES, Queries } from "../components/graphql/queries";
import { DELETE_PLACE, ADD_PLACE } from "../components/graphql/mutations";

interface PlacesQueryResult {
  places: Place[];
}

export const usePlaces = (
  options?: QueryHookOptions<PlacesQueryResult, Record<string, any>>
) => {
  const { loading, error, data } = useQuery<PlacesQueryResult>(PLACES, {
    displayName: "PlacesQuery",
    pollInterval: 30 * 1000,
    ...options
  });

  const places = data ? data.places : [];
  return { loading, error, places };
};

export const useDeletePlace = () =>
  useMutation(DELETE_PLACE, {
    refetchQueries: [Queries.Places]
  });

export const useAddPlace = () =>
  useMutation(ADD_PLACE, {
    refetchQueries: [Queries.Places]
  });
