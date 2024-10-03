import express from "express";
import Brand from "../../models/Brand.js";

const router = express.Router();

router.get("/brand/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Brand.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single brand successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
