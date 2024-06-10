const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("chat-message", (msg, room) => {
    if (!room) {
      return console.log("no room set");
    } else {
      io.to(room).emit("received-message", msg, room);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
