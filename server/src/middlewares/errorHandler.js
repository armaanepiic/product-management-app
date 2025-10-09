import z from "zod";
import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json(JSON.parse(err.message));
  }

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(
    `[${new Date().toISOString()}]: ❌ ERROR ${req.method} ~ ${
      req.url
    } ~ ${err}`
  );

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;