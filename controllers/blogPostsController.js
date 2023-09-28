import pool from "../db/dbPool.js";

export const getAllBlogPosts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * from blog_posts ORDER BY date DESC"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "db error" });
  }
};

export const getBlogPostsOfCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const result = await pool.query(
      "SELECT * from blog_posts WHERE category = $1 ORDER BY date DESC",
      [category]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "db error" });
  }
};
