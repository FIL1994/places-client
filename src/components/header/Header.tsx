import * as React from "react";
import "./header.less";
import SignInModal from "../auth/SignInModal";
import RightContent from "./RightContent";
import SignUpModal from "../auth/SignUpModal";

const Header: React.FunctionComponent = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

  return (
    <>
      <header>
        <span className="left-content" />
        <span className="header-title">
          <h1>Places</h1>
        </span>
        <RightContent
          showSignInModal={() => setIsSignInModalOpen(true)}
          showSignUpModal={() => setIsSignUpModalOpen(true)}
        />
      </header>
      <SignInModal
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
      />
      <SignUpModal
        isOpen={isSignUpModalOpen}
        setIsOpen={setIsSignUpModalOpen}
      />
    </>
  );
};

export default Header;
