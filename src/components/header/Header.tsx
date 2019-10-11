import * as React from "react";
import "./header.less";
import SignInModal from "../auth/SignInModal";
import RightContent from "./RightContent";

const Header: React.FunctionComponent = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);

  return (
    <>
      <header>
        <span className="left-content" />
        <span className="header-title">
          <h1>Places</h1>
        </span>
        <RightContent setIsSignInModalOpen={setIsSignInModalOpen} />
      </header>
      <SignInModal
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
      />
    </>
  );
};

export default Header;
