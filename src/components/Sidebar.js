import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";
import {
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  PeopleAlt,
} from "@material-ui/icons";
import SideBarOption from "./SideBarOption";
import AddIcon from "@material-ui/icons/Add";
import { InsertComment } from "@material-ui/icons";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const roomCollectionef = collection(db, "rooms");
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    onSnapshot(roomCollectionef, (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  });
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2 id="sidebar_label">{user?.displayName}</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Menttions & Reactions" />
      <SideBarOption Icon={Drafts} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SideBarOption Icon={PeopleAlt} title="People & User Groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File Browser" />
      <SideBarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption addChannelOption id Icon={AddIcon} title="Add Channel" />
      {channels.map((channel) => (
        <SideBarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
