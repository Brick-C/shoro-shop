import express from "express";
import Brand from "../../models/Brand.js";
import { productBrandMulter } from "../../utils/multer.js";
import { createSlug } from "../../utils/slugCreate.js";

const router = express.Router();

router.post("/brand", productBrandMulter, async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      category: data,
      message: "Brand successfully created",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
