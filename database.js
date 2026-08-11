// importing
import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

// creating a pool
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// using queries

export async function getNotes() {
  const [notes] = await pool.query("SELECT * FROM notes");
  return notes;
}

export async function getNote(id) {
  const [note] = await pool.query(
    `SELECT * FROM notes
    WHERE id = ?`,
    [id],
  );
  return note[0];
}

export async function createNote(title, contents) {
  const [result] = await pool.query(
    `INSERT INTO notes (title, contents)
    VALUES (?, ?)`,
    [title, contents],
  );
  const id = result.insertId;
  return getNote(id);
}
