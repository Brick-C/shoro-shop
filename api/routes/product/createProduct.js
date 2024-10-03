import express from "express";
import Product from "../../models/Brand.js";
import { productMulter } from "../../utils/multer.js";
import { createSlug } from "../../utils/slugCreate.js";

const router = express.Router();

router.post("/", productMulter, async (req, res) => {
  try {
    const {
      name,
      shortDesc,
      longDesc,
      regPrice,
      salePrice,
      categories,
      brands,
      tags,
    } = req.body;
    const data = await Product.create({
      name,
      shortDesc,
      longDesc,
      regPrice,
      salePrice,
      slug: createSlug(name),
      //photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Product successfully created",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
