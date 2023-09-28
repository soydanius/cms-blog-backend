import express from "express";
import {
  getAllBlogPosts,
  getBlogPostsOfCategory,
} from "../controllers/blogPostsController.js";

const blogPostsRouter = express.Router();

blogPostsRouter
  .get("/", getAllBlogPosts)
  .get("/:category", getBlogPostsOfCategory);

export default blogPostsRouter;
