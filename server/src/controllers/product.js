import { mockProducts } from "../mockdata.js";
import { CreateProductSchema } from "../schemas/product.js";
import { productServices } from "../services/index.js";

export const createProduct = async (req, res) => {
  CreateProductSchema.parse(req.body);
  const newProduct = await productServices.createProduct(req.body);
  res.status(201).json(newProduct);
};

export const getAllProducts = (req, res) => {
  res.status(200).json(mockProducts);
};

export const getProductById = (req, res) => {
  const { productId } = req.params;
  res.json({ message: `Product ID: ${productId}` });
};

export const updateProduct = (req, res) => {
  throw new RouteNotImplementedError();
};

export const deleteProduct = (req, res) => {
  throw new RouteNotImplementedError();
};
