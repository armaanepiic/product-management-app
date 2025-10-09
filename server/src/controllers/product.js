import { productServices } from "../services/index.js";

export const createProduct = async (req, res) => {
  const newProduct = await productServices.createProduct(req.body);
  res.status(201).json(newProduct);
};

export const getAllProducts = async (req, res) => {
  res.status(200).json(await productServices.getAllProducts());
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
