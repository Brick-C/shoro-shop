import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname === "category-photo") {
      cb(null, "api/public/categories");
    }
    if (file.fieldname === "brand-photo") {
      cb(null, "api/public/brands");
    }
    if (
      file.fieldname === "product-photo" ||
      file.fieldname === "product-gallery-photo"
    ) {
      cb(null, "api/public/products");
    }
  },
});

export const productCategoryMulter = multer({ storage }).single(
  "category-photo"
);

export const productBrandMulter = multer({ storage }).single("brand-photo");

export const productMulter = multer({ storage }).fields([
  { name: "product-photo", maxCount: 1 },
  { name: "product-gallery-photo", maxCount: 4 },
]);
