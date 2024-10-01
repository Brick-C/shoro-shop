import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import createCategoryRoute from "./routes/createCategory.js";
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
app.use("/api/v1/product", productCategoryRoute, createCategoryRoute);
//app.use("/api/v1/product", );

//listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
