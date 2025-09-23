import { Router } from "express";

const baseRouter = Router();

baseRouter.get("/_status" , (req, res) => {
    res.json({
        message: "Healthy!",
    })
})

export default baseRouter;