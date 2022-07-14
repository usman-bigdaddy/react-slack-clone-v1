import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "../styles/ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const theRoomMsgs = collection(db, "rooms", channelId, "messages");
  const [msg, setMsg] = useState("");
  const [{ user }] = useStateValue();
  const sendChat = (e) => {
    e.preventDefault();
    if (channelId) {
      const newMsg = {
        message: msg,
        user: user.displayName,
        userimage: user.photoURL,
        timestamp: serverTimestamp(),
      };
      addDoc(theRoomMsgs, newMsg);
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder={`Message #${channelName} channel`}
        />
        <Button type="submit" onClick={sendChat}>
          ADD
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
