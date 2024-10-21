import express from "express";
import Brand from "../../models/Brand.js";
import { createSlug } from "../../utils/slugCreate.js";
import { productBrandMulter } from "../../utils/multer.js";
const router = express.Router();

router.patch("/brand/:id", productBrandMulter, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file.filename : photo,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Brand successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
