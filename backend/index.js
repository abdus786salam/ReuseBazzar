const express = require("express");
const cors = require("cors");
const { connected } = require("./config/db");
const { registerRouter } = require("./routes/register.routes");
const { bikeRouter } = require("./routes/bike.routes");
const { authenticate } = require("./middlewares/authetication");
const fileupload = require("express-fileupload");
const { CarRouter } = require("./routes/car.routes");
const { LaptopRouter } = require("./routes/laptop.routes");
const { MobileRouter } = require("./routes/mobile.routes");
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
// app.use(authenticate);
app.use("/bikes", bikeRouter);
app.use("/cars", CarRouter);
app.use("/laptops", LaptopRouter);
app.use("/mobiles", MobileRouter);
app.use("/refrigerator", MobileRouter);
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
