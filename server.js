const express = require("express");
const app = express();
const usersRouter = require("./users");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  }),
);

app.use(express.json());

app.use("/users", usersRouter);

app.use((req, res, next) => {
  console.log(`[INCOMING REQUEST] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Backend");
});

app.listen(3000, () => {
  console.log("The server is running");
});
