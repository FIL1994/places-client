import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "../elements/Modal";
import { useSignIn } from "../../hooks/requestHooks";
import { client } from "../../graphql/client";
import { AppContext } from "../App";

interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, setIsOpen }) => {
  const { setUser } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signIn, { error }] = useSignIn();

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
      <form
        onSubmit={async e => {
          e.preventDefault();
          const { data, errors } = await signIn({
            variables: {
              email,
              password
            }
          });

          if (!errors) {
            const {
              login: { token, user }
            } = data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            client.resetStore();
            setUser(user);
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
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
        {error && error.message}
      </form>
    </Modal>
  );
};

export default SignInModal;
