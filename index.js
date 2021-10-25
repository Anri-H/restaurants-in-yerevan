import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/restaurants.js";
import routerComment from "./routes/comment.js";
import path from "path";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(routerComment);

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
