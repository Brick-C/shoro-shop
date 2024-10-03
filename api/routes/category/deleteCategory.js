import express from "express";
import Category from "../../models/Category.js";

const router = express.Router();

router.delete("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: "Single category successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
