import express from "express";
import Tag from "../../models/Tag.js";

const router = express.Router();

router.put("/tag/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Tag successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
