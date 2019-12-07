import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "../elements/Modal";
import { useSignup } from "../../hooks/requestHooks";

interface SignUpModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [signUp, { error: networkError }] = useSignup();
  const [error, setError] = React.useState<string>();

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
      <form
        onSubmit={async e => {
          e.preventDefault();
          if (password !== confirmPassword) {
            setError("passwords do not match");
            return;
          }
          if (error !== undefined) setError(undefined);

          const { errors } = await signUp({
            variables: {
              email,
              password
            }
          });

          if (!errors) {
            setIsOpen(false);
          }
        }}
      >
        <TextField
          autoFocus
          label="Email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
        />
        <TextField
          label="Password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          type="password"
        />
        <TextField
          label="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.currentTarget.value)}
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
        {error}
        {networkError && networkError.message}
      </form>
    </Modal>
  );
};

export default SignUpModal;
