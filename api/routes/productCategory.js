import express from "express";
import CategoryModel from "../models/Category.js";

const router = express.Router();

router.get("/category", async (req, res) => {
  try {
    const data = await CategoryModel.find();
    res.status(200).json({
      categories: data,
      message: "All categories successfully fetched",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
