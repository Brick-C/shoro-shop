import express from "express";
import Brand from "../../models/Brand.js";

const router = express.Router();

router.delete("/brand/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      message: "Single brand successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
