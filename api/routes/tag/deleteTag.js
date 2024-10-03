import express from "express";
import Tag from "../../models/Tag.js";

const router = express.Router();

router.delete("/tag/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      message: "Single tag successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
