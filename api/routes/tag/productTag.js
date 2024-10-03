import express from "express";
import Tag from "../../models/Tag.js";

const router = express.Router();

router.get("/tag", async (req, res) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      categories: data,
      message: "All tags successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
