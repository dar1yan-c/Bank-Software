import express from "express";
import cors from "cors";

import { getUsers, getUser, createUser, findUser } from "./database.js";

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUser(name, email, password);
  res.status(201).send(user);
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required." })
    }

    const user = await findUser(email, password);

    if (!user) {
      return res.status(401).json({ message: "User not found." })
    }

    res.status(202).json(user);
  }
  catch (err) {
    console.error("Error in POST /users: ", err);
    return res.status(500).json({ message: "Internal server error." })
  }

})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!" });
  next();
});

app.listen(3000, () => {
  console.log("The server is running");
});
