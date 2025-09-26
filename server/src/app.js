import cors from "cors";
import express from "express";

import envConfig from "./config/envConfig.js";

import { logger } from "./middlewares/index.js";

import configureRouters from "./routers/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGIN,
  })
);

app.use(logger);

configureRouters(app);

app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
