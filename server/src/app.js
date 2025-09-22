import express from 'express';
import cors from 'cors';
import { mockProducts } from './mockdata.js';
import envConfig from "./config/envConfig.js";
import productRouter from './routers/product.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: envConfig.ALLOWED_ORIGIN,
}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get("/status", (req, res) => {
  res.json(
    {
      message : "Hello Application is RUNNING",
    }
  );
});

app.use('/api/products' , productRouter);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
