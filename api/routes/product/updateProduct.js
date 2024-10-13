import express from "express";
import Product from "../../models/Brand.js";
import { productMulter } from "../../utils/multer.js";
import { createSlug } from "../../utils/slugCreate.js";
import { unlinkSync } from "fs";

const router = express.Router();

router.put("/:id", productMulter, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      shortDesc,
      longDesc,
      regPrice,
      salePrice,
      delGallery,
      categories,
      brands,
      tags,
    } = req.body;

    //get edit product
    const product = await Product.findById(id);

    //product photo update
    let photo = product.photo;
    if (req.files["product-photo"]) {
      unlinkSync(`api/public/products/${product.photo}`); //delete old photo
      photo = req.files["product-photo"][0].filename;
    } else {
      photo = data.photo;
    }

    if (delGallery) {
      delGallery.forEach((item) => {
        unlinkSync(`api/public/products/${item}`); //delete old gallery
      });
    }
    let galleryOld = product.gallery.filters(
      (data) => !delGallery.includes(data)
    );

    let newGallery = [];
    if (req.files["product-gallery-photo"]) {
      req.files["product-gallery-photo"].forEach((item) => {
        newGallery.push(item.filename);
      });
    }

    const finalGallery = galleryOld.concat(newGallery);

    const data = await product.updateOne(
      id,
      {
        name,
        slug: createSlug(name),
        shortDesc,
        longDesc,
        regPrice,
        salePrice,
        photo,
        categories,
        brands,
        tags,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      category: data,
      message: "Product successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
