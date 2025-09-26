import express from "express";
import cors from "cors";
import { mockProducts } from "./mockdata.js";
import envConfig from "./config/envConfig.js";
import configureRouters from "./routers/index.js";
import logger from "./middlewares/logger.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGIN,
  })
);

app.use(logger);

configureRouters(app);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
