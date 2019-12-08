import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
);

type CreateInputProps = Omit<
  React.ComponentProps<typeof InputBase>,
  "className"
> & { icon?: React.ComponentType };

const CreateInput: React.FC<CreateInputProps> = ({
  style,
  icon: Icon,
  ...props
}) => {
  const classes = useStyles({});

  return (
    <Paper className={classes.root} style={style}>
      <InputBase className={classes.input} {...props} />
      {Icon && (
        <IconButton
          type="submit"
          color="primary"
          className={classes.iconButton}
        >
          <Icon />
        </IconButton>
      )}
    </Paper>
  );
};

export default CreateInput;
