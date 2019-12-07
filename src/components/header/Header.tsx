import React from "react";
import { Link } from "react-router-dom";
import SignInModal from "../auth/SignInModal";
import RightContent from "./RightContent";
import SignUpModal from "../auth/SignUpModal";
import "./header.less";

const Header: React.FC = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

  return (
    <>
      <header>
        <span className="left-content" />
        <span className="header-title">
          <h1>
            <Link to="/">Places</Link>
          </h1>
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
