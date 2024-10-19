import express from "express";
import Brand from "../../models/Brand.js";

const router = express.Router();

router.patch("/brand-status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );
    res.status(200).json({
      brand: brand,
      category: brand,
      message: "Brand status successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
