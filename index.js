import { Server, Socket } from "socket.io";

const io = new Server({
  cors: { origin: "http://localhost:3000" },
});

io.on("connection", (seocket) => {
  console.log(Socket);
});

io.listen(3000);
