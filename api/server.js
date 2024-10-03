import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/category/productCategory.js";
import createCategoryRoute from "./routes/category/createCategory.js";
import getSingleCategoryRoute from "./routes/category/getSingleCategory.js";
import deleteSingleCategoryRoute from "./routes/category/deleteCategory.js";
import updateCategoryRoute from "./routes/category/updateCategory.js";
import productBrandRoute from "./routes/brand/productBrand.js";
import createBrandRoute from "./routes/brand/createBrand.js";
import getSingleBrandRoute from "./routes/brand/getSingleBrand.js";
import deleteBrandRoute from "./routes/brand/deleteBrand.js";
import updateBrandRoute from "./routes/brand/updateBrand.js";
import connectDB from "./config/db.js";

//init express
const app = express();
dotenv.config();

//environment variable
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("api/public"));

//routes
app.use(
  "/api/v1/product",
  //categoryRoute
  productCategoryRoute,
  createCategoryRoute,
  getSingleCategoryRoute,
  deleteSingleCategoryRoute,
  updateCategoryRoute,
  //brandRoute
  productBrandRoute,
  createBrandRoute,
  getSingleBrandRoute,
  deleteBrandRoute,
  updateBrandRoute
);

//listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
