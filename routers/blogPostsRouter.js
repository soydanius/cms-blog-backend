import express from "express";
import { getBlogPostsOfCategory } from "../controllers/blogPostsController.js";

const blogPostsRouter = express.Router();

blogPostsRouter.get("/:category", getBlogPostsOfCategory);

export default blogPostsRouter;
