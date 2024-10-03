import express from "express";
import Brand from "../../models/Brand.js";

const router = express.Router();

router.get("/brand", async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      categories: data,
      message: "All brands successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
