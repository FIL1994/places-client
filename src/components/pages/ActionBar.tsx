import * as React from "react";
import { Link } from "react-router-dom";
import Add from "../../icons/Add";
import "./action-bar.less";
import { PlacesContext } from "./PlaceList";
import Delete from "../../icons/Delete";

const ActionBar = () => {
  const { selectedPlaceId } = React.useContext(PlacesContext);

  return (
    <span className="action-bar">
      {selectedPlaceId !== undefined && (
        <span title="Remove selected place">
          <Delete />
        </span>
      )}
      <Link to="/place/create" title="Add place">
        <Add />
      </Link>
    </span>
  );
};

export default ActionBar;
