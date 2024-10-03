import express from "express";
import Product from "../../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      categories: data,
      message: "All products successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
