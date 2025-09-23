import express from 'express';
import cors from 'cors';
import envConfig from "./config/envConfig.js";
import configureRouters from './routers/index.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: envConfig.ALLOWED_ORIGIN,
}));
const Logger = function (req, res, next) {
  console.log(`[${new Date().toISOString()}]: ${req.method} | ${req.url}`);
  next();
}
app.use(Logger);

configureRouters(app);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
