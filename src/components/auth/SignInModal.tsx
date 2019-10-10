import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "../elements/Modal";

interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FunctionComponent<SignInModalProps> = ({
  isOpen,
  setIsOpen
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <TextField
          autoFocus
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </form>
    </Modal>
  );
};

export default SignInModal;
