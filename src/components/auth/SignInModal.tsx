import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "../elements/Modal";
import { useLogin } from "../../hooks/requestHooks";
import { client } from "../../graphql/client";
import { AppContext } from "../App";

interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FunctionComponent<SignInModalProps> = ({
  isOpen,
  setIsOpen
}) => {
  const { setUser } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, { error }] = useLogin();

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
      <form
        onSubmit={async e => {
          e.preventDefault();
          const { data, errors } = await login({
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
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
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
