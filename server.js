const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));

app.listen(5000, () => console.log("Server running"));
