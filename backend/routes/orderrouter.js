import express from "express"
import placeorder from "../controllers/ordercontroller.js";
import authenticateToken from "../middleware/auth.js";

const orderRouter=express.Router();


orderRouter.post("/place",authenticateToken,placeorder);

export default orderRouter