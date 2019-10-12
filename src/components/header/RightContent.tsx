import * as React from "react";
import Button from "@material-ui/core/Button";
import { AppContext } from "../App";
import AvatarMenu from "./AvatarMenu";

const RightContent: React.FunctionComponent<{
  showSignInModal: () => void;
  showSignUpModal: () => void;
}> = ({ showSignInModal, showSignUpModal }) => {
  const { user } = React.useContext(AppContext);

  return (
    <span className="right-content">
      {user ? (
        <AvatarMenu />
      ) : (
        <>
          <Button size="small" onClick={showSignInModal}>
            Sign In
          </Button>
          <Button size="small" variant="outlined" onClick={showSignUpModal}>
            Sign Up
          </Button>
        </>
      )}
    </span>
  );
};

export default RightContent;
