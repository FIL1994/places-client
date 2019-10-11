import * as React from "react";
import Button from "@material-ui/core/Button";
import "./header.less";
import SignInModal from "./auth/SignInModal";

const Header: React.FunctionComponent = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);

  return (
    <>
      <header>
        <span className="left-content" />
        <span className="header-title">
          <h1>Places</h1>
        </span>
        <span className="right-content">
          <Button size="small" onClick={() => setIsSignInModalOpen(true)}>
            Sign In
          </Button>
        </span>
      </header>
      <SignInModal
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
      />
    </>
  );
};

export default Header;
