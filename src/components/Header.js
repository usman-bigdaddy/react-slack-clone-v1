import React from "react";
import "../styles/header.css";
import { Avatar } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { HelpOutline } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search for ...." />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
