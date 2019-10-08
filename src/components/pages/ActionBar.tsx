import * as React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Add from "../../icons/Add";
import { PlacesContext } from "./PlaceList";
import Delete from "../../icons/Delete";
import "./action-bar.less";

const DELETE_PLACE = gql`
  mutation DeletePlace($placeId: ID!) {
    deletePlace(placeId: $placeId)
  }
`;

const ActionBar = () => {
  const { selectedPlaceId } = React.useContext(PlacesContext);
  const [deletePlace] = useMutation(DELETE_PLACE);

  const onRemove = async () => {
    await deletePlace({
      variables: {
        placeId: selectedPlaceId
      }
    });
  };

  return (
    <span className="action-bar">
      {selectedPlaceId !== undefined && (
        <span title="Remove selected place">
          <Delete onClick={onRemove} />
        </span>
      )}
      <Link to="/place/create" title="Add place">
        <Add />
      </Link>
    </span>
  );
};

export default ActionBar;
