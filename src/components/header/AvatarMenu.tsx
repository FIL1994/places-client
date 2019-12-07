import * as React from "react";
import Avatar from "react-avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./avatar-menu.less";
import client from "../../graphql/client";
import { AppContext } from "../App";

const AvatarMenu: React.FC = () => {
  const { user, setUser } = React.useContext(AppContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const avatarRef = React.useRef<HTMLSpanElement>();

  return (
    <>
      <span ref={avatarRef}>
        <Avatar
          className="avatar"
          onClick={() => setIsOpen(true)}
          round
          email={user.email}
          name={user.nickname || user.email}
          maxInitials={2}
          size="32"
        />
      </span>
      <Menu
        className="avatar-menu"
        anchorEl={avatarRef.current}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={{
          marginTop: 25
        }}
      >
        <MenuItem disabled>{user.email}</MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setUser(undefined);
            client.resetStore();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AvatarMenu;
