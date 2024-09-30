import express from "express";
import dotenv from "dotenv";

//init express
const app = express();
dotenv.config();

//environment variable
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
