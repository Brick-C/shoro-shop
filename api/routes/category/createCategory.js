import express from "express";
import Category from "../../models/Category.js";
import { productCategoryMulter } from "../../utils/multer.js";
import { createSlug } from "../../utils/slugCreate.js";

const router = express.Router();

router.post("/category", productCategoryMulter, async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Category.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Categories successfully created",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
