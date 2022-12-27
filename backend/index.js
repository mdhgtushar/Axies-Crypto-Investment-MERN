//external imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
//internal imports
const errorHandler = require("./middlewares/errorHandler");
const userRouter = require("./routes/userRoute");

//init
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());

//connnect database
mongoose.connect(process.env.MONGODB, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB CONNECTED");
  }
});

//routes
app.get("/", (req, res) => res.send("Application Runninng..."));
app.use("/api/user", userRouter);
//errorHandelilng
app.use(errorHandler);

//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
