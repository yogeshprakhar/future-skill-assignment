import express, { urlencoded } from "express";
import cors from "cors";
import postRouter from "./routes/card.js";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("Mongoose connection error - ", err));

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


app.get("/ping", async (req, res) => {
  res.json({ message: "Server is ok" });
});

app.use("/cards", postRouter);

app.listen(7000, () => console.log("Server is running"));
