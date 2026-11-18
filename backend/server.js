import pool from "./config/db.js";
import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

const PORT = 5000;

const connection = await pool.getConnection();

app.get("/", async (req, res) => {
  const disp = "SELECT * FROM users";

  const [show] = await pool.query(disp);

  console.log(show);

  try {
    if (!show) {
      res.status(404).json({
        message: "nothing to show from database!",
      });
    }

    res.status(200).json({
      id: show[0].id,
      name: show[0].username,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

app.post("/register", async (res, req) => {
  const  username = req.body;
  const emai
  
  const password

  const trimUsername = username.trim();
  const trimEmail = email.trim();
  const trimPaassword = password.trim();

  try {
    if (!trimUsername || !trimEmail || !trimPaassword) {
      return res.status(409).json({
        message: "Missing fields!",
      });
    }

    const trimPaasswordNew = bcrypt.hash(trimPaassword, 15);

    const insert = await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [trimUsername, trimEmail, trimPaassword],
    );

    if (insert[0] > 0) {
      return res.status(409).json({
        message: "email or username already taken",
      });
    }

    return res.status(200).json({
      message: "Registered successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error!",
      error: error.message,
    });
  }
});

if (!connection) {
  console.log("Failed to connect to database");
}

console.log("Connected to database successfuly");

app.listen(PORT, () => {
  console.log(`server running on localhost: http://localhost:${PORT}`);
});
