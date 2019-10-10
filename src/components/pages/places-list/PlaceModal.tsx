import * as React from "react";
import { PlacesContext } from "./PlaceList";
import Modal from "../../elements/Modal";
import PlaceForm from "../../place-form/PlaceForm";

const PlacesModal = () => {
  const { isModalOpen, setIsModalOpen } = React.useContext(PlacesContext);

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <PlaceForm />
    </Modal>
  );
};

export default PlacesModal;
