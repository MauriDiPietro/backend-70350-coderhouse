import { useState, useEffect } from "react";
import "./App.css";

import { io } from "socket.io-client";

const socketClient = io("http://localhost:8080");

function App() {
  const [newMessage, setNewMessage] = useState("");
  const [newUsername, setNewUsername] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!newUsername) {
      const value = prompt("Your username:");
      setNewUsername(value);
    } else {
      socketClient.on("messages", (data) => {
        setMessages(data);
      });
    }
  }, []);

  const sendMessage = () => {
    try {
      const message = {
        username: newUsername,
        message: newMessage,
      };
      socketClient.emit("chat:message", message);
      setNewMessage("");
      socketClient.on("messages", (data) => {
        setMessages(data);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
  <>
    <input type="text" name="" id="" value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} />
    <button onClick={sendMessage}>SEND</button>
    {
      messages && messages.map((msg)=>{
        return <p><strong>{new Date().toLocaleDateString()} - {msg.username}</strong>: {msg.message}</p>
      })
    }
  </>
  );
}

export default App;
