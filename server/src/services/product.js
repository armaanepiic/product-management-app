import { Product } from "../models/index.js";

export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

export const getAllProducts = async () => {
  const products = await Product.find()
    .select("id name description createdAt")
    .sort({ createdAt: -1 });
  return products;
};