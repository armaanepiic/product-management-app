import {Router} from 'express'
import { mockProducts } from '../mockdata.js';

const productRouter = Router();

productRouter.get('/', (req, res) => {
  res.status(200).json(mockProducts);
})
productRouter.get(":productId" , (req, res) => {
  console.log(req.params);
  const {productId} = req.params;
  res.json({message: `Product ID : ${productId}`});
})
export default productRouter;