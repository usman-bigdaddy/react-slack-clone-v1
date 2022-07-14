import React, { useEffect, useState } from "react";
import "../styles/chatscreen.css";
import { useParams } from "react-router-dom";
import Message from "./Message";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../firebase";
import { onSnapshot, doc, collection } from "firebase/firestore";
import ChatInput from "./ChatInput";

function ChatScreen() {
  const { roomId } = useParams();
  const [roomDets, setRoomDets] = useState(null);
  const [roomMsgs, setRoomMsgs] = useState([]);
  useEffect(() => {
    if (roomId) {
      const theRoom = doc(db, "rooms", roomId);
      onSnapshot(theRoom, (snapshot) => {
        setRoomDets(snapshot.data());
      });
      const theRoomMsgs = collection(db, "rooms", roomId, "messages");
      onSnapshot(theRoomMsgs, (snapshot) => {
        setRoomMsgs(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDets?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMsgs.map((message) => (
          <Message
            key={message.id}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userimage}
            message={message?.message}
          />
        ))}
      </div>
      <ChatInput channelName={roomDets?.name} channelId={roomId} />
    </div>
  );
}

export default ChatScreen;
