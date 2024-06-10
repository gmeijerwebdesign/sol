import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function Chat({ navClick }) {
  const { userData, room_id } = navClick;
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [newChatMsg, setNewChatMsg] = useState("");
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    if (room_id) {
      socket.emit("join-room", room_id);
    }

    socket.on("received-message", (msg) => {
      setReceivedMessages((prevMsg) => [...prevMsg, msg]);
      console.log("Message received: ", msg);
    });

    // Event listener for disconnect event
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      // You can add any cleanup logic here if needed
    });

    // Clean up event listeners on component unmount
    return () => {
      socket.off("received-message");
      socket.off("disconnect");
    };
  }, [room_id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newChatMsg.trim()) {
      socket.emit("chat-message", newChatMsg, room_id);
      setNewChatMsg("");
    }
  };

  return (
    <div>
      <p>{navClick.userData.username}</p>
      <img
        src={`http://localhost:4000${navClick.userData.image_url}`}
        className="rounded-[50%] w-[40px] h-[40px]"
      />

      {/* received messages */}
      <div>
        {receivedMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      {/* msg bar */}
      <form
        onSubmit={handleFormSubmit}
        method="post"
        className="relative top-[65vh] flex justify-center left-1/2 transform -translate-x-1/2"
      >
        <input
          type="text"
          placeholder="Type a message here.."
          className="bg-[#F7F7F7] h-[60px] w-[50vw]"
          value={newChatMsg}
          onChange={(e) => setNewChatMsg(e.target.value)}
        />
        <input
          type="submit"
          value="send"
          className="bg-[#2D97A7] text-white font-bold w-[80px]"
        />
      </form>
    </div>
  );
}

export default Chat;
