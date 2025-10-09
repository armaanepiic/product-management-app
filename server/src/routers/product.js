import { Router } from "express";

import { productController } from "../controllers/index.js";
import validatePayload from "../middlewares/validate.js";
import { CreateProductSchema } from "../schemas/product.js";

const productRouter = Router();

productRouter.post(
  "/",
  validatePayload(CreateProductSchema),
  productController.createProduct
);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:productId", productController.getProductById);
productRouter.put("/:productId", productController.updateProduct);
productRouter.delete("/:productId", productController.deleteProduct);

export default productRouter;
