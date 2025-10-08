import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false } // Disable automatic _id generation for subdocuments
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      message: "Product name is required",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    categories: {
      type: [String],
      default: [],
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        type: reviewSchema,
        default: [],
      },
    ],
  },
  { timestamps: true, virtuals: true }
);

productSchema.virtual("id").get(function () {
  return this._id.toString();
});

productSchema.set("toJSON", { virtuals: true });

const Product = mongoose.model("Product", productSchema);

export default Product;