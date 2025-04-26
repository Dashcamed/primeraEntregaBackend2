import express from "express";
import config from "./config/config.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import sessionRouter from "./routes/session.router.js";
import userRouter from "./routes/user.router.js";

const PORT = config.port;
const MONGO_URL = config.mongoUrl;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use("/api/session", sessionRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
      console.log("Connected to MongoDB");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
