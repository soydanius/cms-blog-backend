import express from "express";
import blogPostsRouter from "./routers/blogPostsRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/blog", blogPostsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
