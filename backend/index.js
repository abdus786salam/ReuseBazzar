const express = require("express");
const cors = require("cors");
const { connected } = require("./config/db");
const { registerRouter } = require("./routes/register.routes");
const { bikeRouter } = require("./routes/bike.routes");
const { converter } = require("./middlewares/Imageconverter");
const fileupload = require("express-fileupload");
require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use(express.json());
app.use("/users", registerRouter);
// app.use(converter);
app.use("/bikes", bikeRouter);
app.listen(process.env.port, async () => {
  try {
    await connected;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
    console.log("Connection field to db");
  }
  console.log(`running at ${process.env.port}`);
});
