import express from "express";
import Product from "../../models/Brand.js";
import { unlinkSync } from "fs";

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    unlinkSync(`api/public/products/${data.photo}`);
    data.gallery.forEach((photo) => {
      unlinkSync(`api/public/products/${photo}`);
    });

    res.status(200).json({
      message: "Single product successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
