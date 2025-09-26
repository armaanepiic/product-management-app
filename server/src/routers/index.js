import baseRouter from "./base.js";
import productRouter from "./product.js";

const configureRouters = (app) => {
  app.use("/api", baseRouter);
  app.use("/api/products", productRouter);
};

export default configureRouters;
