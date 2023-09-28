import express from "express";
import cors from "cors";
import blogPostsRouter from "./routers/blogPostsRouter.js";

const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(express.json());

app.use("/blog", cors(corsOptions), blogPostsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
