import React from "react";
import Add from "../../icons/Add";
import { PlacesContext } from "./places-list/PlaceList";
import Delete from "../../icons/Delete";
import { useDeletePlace, usePlaceList } from "../../hooks/requestHooks";
import { useUser } from "../../hooks/stateHooks";
import "./action-bar.less";

function useCanEdit(): boolean {
  const { id } = React.useContext(PlacesContext);
  const { placeList } = usePlaceList(id);
  const user = useUser();

  if (placeList) {
    return user.id === placeList.user.id;
  }
  return false;
}

const ActionBar = () => {
  const { selectedPlaceId, setIsModalOpen } = React.useContext(PlacesContext);
  const [deletePlace] = useDeletePlace();
  const canEdit = useCanEdit();
  const didFetchPlace = selectedPlaceId !== undefined;

  const onRemove = async () => {
    await deletePlace({
      variables: {
        placeId: selectedPlaceId
      }
    });
  };

  if (!canEdit) return null;

  return (
    <span className="action-bar">
      {didFetchPlace && (
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
