const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DB = require("../database");

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "your_secret_key_here");
    const userId = decoded.user_id;
    const [user] = await DB.query("SELECT * FROM users WHERE user_id = ?", [
      userId,
    ]);

    res.status(200).json({ msg: "Successfully retrieved user", user: user });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: err });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "your_secret_key_here");
    const userId = decoded.user_id;
    await DB.query("SELECT * FROM users WHERE user_id = ?", [userId]);
    const [users] = await DB.query(
      "SELECT * FROM users WHERE NOT user_id = ?",
      [userId]
    );

    res.status(200).json({ users: users });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const file = req.file;

    if (!username || !password) {
      return res.status(401).json({ msg: "Please fill in forms" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let imageUrl = "/uploads/empty.png";

    if (file) {
      imageUrl = `/uploads/${file.filename}`;
    }

    await DB.query(
      "INSERT INTO users (username, password, image_url) VALUES (?, ?, ?)",
      [username, hashedPassword, imageUrl]
    );

    res.status(200).json({
      msg: "Successfully registered user",
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: err });
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({ msg: "Please fill in forms" });
    }

    const [user] = await DB.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);

    if (!user) {
      return res.status(401).json({ msg: "No user with that username" });
    }
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Username or password is incorrect" });
    }

    const user_id = user[0].user_id;
    const token = jwt.sign({ user_id }, "your_secret_key_here", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ msg: "Successfully logged in user", user: user, token: token });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: err });
  }
};

module.exports = { Register, Login, getUser, getAllUsers };
