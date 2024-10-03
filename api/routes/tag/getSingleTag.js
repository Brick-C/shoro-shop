import express from "express";
import Tag from "../../models/Tag.js";

const router = express.Router();

router.get("/tag/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Tag.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single tag successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
