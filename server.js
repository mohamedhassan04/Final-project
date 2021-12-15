const express = require("express");
const connectDB = require("./config/DBconnect");
const app = express();
const cors = require("cors");
const passport = require("passport");

require("dotenv").config();

connectDB();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use("/uploads", express.static("uploads"));
app.use("/user", require("./routes/user"));
app.use("/event", require("./routes/event"));
app.use("/image", require("./routes/imageRoute"));
app.use("/post", require("./routes/post"));

app.use("/addphoto/uploads", require("./routes/uploadRouter"));
app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running...")
);
