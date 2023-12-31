require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const routes = require("./routes/workouts");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", routes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Conntected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
