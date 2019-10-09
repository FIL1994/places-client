import * as React from "react";
import { Modal } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { PlacesContext } from "./PlaceList";
import PlaceForm from "../../place-form/PlaceForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

const PlacesModal = () => {
  const { isModalOpen, setIsModalOpen } = React.useContext(PlacesContext);
  const classes = useStyles({});

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div
        className={classes.paper}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <PlaceForm />
      </div>
    </Modal>
  );
};

export default PlacesModal;
