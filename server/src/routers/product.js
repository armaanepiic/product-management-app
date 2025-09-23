import {Router} from 'express'
import { mockProducts } from '../mockdata.js';
import { RouteNotImplementedError } from '../errors/index.js';

const productRouter = Router();

productRouter.post("/", (req, res) => {
  throw new RouteNotImplementedError();
})

productRouter.get('/', (req, res) => {
  res.status(200).json(mockProducts);
});
productRouter.get("/:productId" , (req, res) => {
  console.log(req.params);
  const {productId} = req.params;
  res.json({message: `Product ID : ${productId}`});
});
export default productRouter;