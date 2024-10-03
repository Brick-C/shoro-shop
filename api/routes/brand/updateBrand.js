import express from "express";
import Brand from "../../models/Brand.js";

const router = express.Router();

router.put("/brand/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
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
