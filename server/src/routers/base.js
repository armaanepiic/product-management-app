import { Router } from "express";

const baseRouter = Router();

baseRouter.get("/_status", (req, res) => {
  res.json({
    message: "healthy",
  });
});

export default baseRouter;
