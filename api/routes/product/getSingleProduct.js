import express from "express";
import Product from "../../models/Brand.js";

const router = express.Router();

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single product successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
