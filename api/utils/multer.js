import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "api/public/categories");
  },
});

export const productCategoryMulter = multer({ storage: storage }).single(
  "categoryPhoto"
);
