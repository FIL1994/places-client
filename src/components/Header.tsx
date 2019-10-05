import * as React from "react";
import "./header.less";
import Add from "../icons/Add";
import Button from "./elements/Button";

const Header = () => {
  return (
    <header>
      <h1>Places</h1>
      <Button icon={Add}>Add Place</Button>
    </header>
  );
};

export default Header;
