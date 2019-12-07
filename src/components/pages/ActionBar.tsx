import * as React from "react";
import Add from "../../icons/Add";
import { PlacesContext } from "./places-list/PlaceList";
import Delete from "../../icons/Delete";
import { useDeletePlace } from "../../hooks/requestHooks";
import "./action-bar.less";
import { Queries } from "../../graphql/queries";

const ActionBar = () => {
  const { selectedPlaceId, setIsModalOpen } = React.useContext(PlacesContext);
  const [deletePlace] = useDeletePlace();

  const onRemove = async () => {
    await deletePlace({
      variables: {
        placeId: selectedPlaceId
      },
      refetchQueries: [Queries.PlaceList]
    });
  };

  return (
    <span className="action-bar">
      {selectedPlaceId !== undefined && (
        <span title="Remove selected place">
          <Delete onClick={onRemove} />
        </span>
      )}
      <span title="Add place">
        <Add
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </span>
    </span>
  );
};

export default ActionBar;
