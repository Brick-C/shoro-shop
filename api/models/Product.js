import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    shortDesc: {
      type: String,
      trim: true,
    },
    longDesc: {
      type: String,
      trim: true,
    },
    regPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: Array,
      default: null,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
