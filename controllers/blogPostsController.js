import pool from "../db/dbPool.js";

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
