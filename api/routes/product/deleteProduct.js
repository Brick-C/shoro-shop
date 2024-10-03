import express from "express";
import Product from "../../models/Brand.js";

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Single product successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
