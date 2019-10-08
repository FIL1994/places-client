import * as React from "react";
import { Link } from "react-router-dom";
import Add from "../../icons/Add";
import { PlacesContext } from "./PlaceList";
import Delete from "../../icons/Delete";
import { useDeletePlace } from "../../hooks/requestHooks";
import "./action-bar.less";

const ActionBar = () => {
  const { selectedPlaceId } = React.useContext(PlacesContext);
  const [deletePlace] = useDeletePlace();

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
