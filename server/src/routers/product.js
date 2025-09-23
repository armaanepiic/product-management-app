import {Router} from 'express'
import { mockProducts } from '../mockdata.js';
import { RouteNotImplementedError } from '../errors/index.js';
import { getAllProducts } from '../controllers/product.js';
import { productController } from '../controllers/index.js';

const productRouter = Router();

productRouter.post("/", (req, res) => productController.createProduct);

productRouter.get('/', (req, res) => productController.getAllProducts);

productRouter.get("/:productId" , productController.getProductById);

productRouter.put("/:productId" , productController.updateProduct);

productRouter.delete("/:productID", productController.deleteProduct);

export default productRouter;