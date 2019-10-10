import * as React from "react";
import MaterialUIModal, {
  ModalProps as MaterialUIModalProps
} from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import "./modal.less";
import { CreateCSSProperties } from "@material-ui/styles/withStyles";

type ModalSize = "sm" | "md";

enum ModalSizes {
  "sm" = 250,
  "md" = 350
}

interface ModalProps extends MaterialUIModalProps {
  styles?: CreateCSSProperties;
  size?: ModalSize;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  className = "",
  size = "md",
  children,
  styles,
  ...props
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: "absolute",
        width: ModalSizes[size],
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        ...styles
      }
    })
  );
  const classes = useStyles({});

  return (
    <MaterialUIModal className={`modal ${className}`} {...props}>
      <div
        className={classes.paper}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {children}
      </div>
    </MaterialUIModal>
  );
};

export default Modal;
