import express from "express";
import Tag from "../../models/Tag.js";

const router = express.Router();

router.post("/tag", async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({
      name,
      slug,
    });
    res.status(200).json({
      category: data,
      message: "Tag successfully created",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
