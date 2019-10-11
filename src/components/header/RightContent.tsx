import * as React from "react";
import Button from "@material-ui/core/Button";
import { AppContext } from "../App";
import AvatarMenu from "./AvatarMenu";

const RightContent: React.FunctionComponent<{
  setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsSignInModalOpen }) => {
  const { user } = React.useContext(AppContext);

  return (
    <span className="right-content">
      {user ? (
        <AvatarMenu user={user} />
      ) : (
        <Button size="small" onClick={() => setIsSignInModalOpen(true)}>
          Sign In
        </Button>
      )}
    </span>
  );
};

export default RightContent;
