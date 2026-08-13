import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const [users] = await pool.query("SELECT * FROM users");
  return users;
}

export async function getUser(id) {
  const [user] = await pool.query(
    `SELECT * FROM users
    WHERE id = ?`,
    [id],
  );
  return user[0];
}

export async function createUser(name, email, password) {
  const [user] = await pool.query(
    `INSERT INTO users (name, email, password)
    VALUES (?,?,?)`,
    [name, email, password],
  );
  const id = user.insertId;
  return await getUser(id);
}
