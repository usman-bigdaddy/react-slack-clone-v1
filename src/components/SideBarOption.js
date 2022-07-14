import React from "react";
import "../styles/SideBarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function SideBarOption({ Icon, title, id, addChannelOption }) {
  const roomCollectionef = collection(db, "rooms");
  const navigate = useNavigate();
  const addChannelHandler = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      const newChannel = {
        name: channelName,
      };
      addDoc(roomCollectionef, newChannel);
    }
  };
  const selectChannelHandler = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate("title");
    }
  };
  return (
    <div
      className="sideBarOption"
      onClick={addChannelOption ? addChannelHandler : selectChannelHandler}
    >
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sideBarOption_channel">
          <span className="sideBarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SideBarOption;
