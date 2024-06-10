const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const { multerConfig } = require("./multer-config");
const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

app.listen(4000, () => console.log("Server is runningg"));
