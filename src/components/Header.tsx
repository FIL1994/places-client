import * as React from "react";
import { Link } from "react-router-dom";
import "./header.less";
import Add from "../icons/Add";
import Button from "./elements/Button";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <h1>Places</h1>
      <Button as={Link} icon={Add} to="/place/create">
        Add Place
      </Button>
    </header>
  );
};

export default Header;
