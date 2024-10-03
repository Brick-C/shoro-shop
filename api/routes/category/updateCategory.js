import express from "express";
import Category from "../../models/Category.js";

const router = express.Router();

router.put("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Categories successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
