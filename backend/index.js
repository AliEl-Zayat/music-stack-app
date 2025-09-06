const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

// socket.io server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + Socket.IO backend 🚀" });
});

// socket events
io.on("connection", (socket) => {
  console.log(`⚡ Client connected: ${socket.id}`);

  socket.on("chat message", (msg) => {
    console.log("📩 Message received:", msg);
    io.emit("chat message", msg); // broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`✅ Backend listening on http://localhost:${PORT}`);
});
