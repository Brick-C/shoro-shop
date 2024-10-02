import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

router.get("/category/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single category successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
