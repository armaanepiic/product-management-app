import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 5000,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
};

export default envConfig;
