import express from "express"
import placeorder, { userorder, verifyorder } from "../controllers/ordercontroller.js";
import authenticateToken from "../middleware/auth.js";

const orderRouter=express.Router();


orderRouter.post("/place",authenticateToken,placeorder);
orderRouter.post("/verify",verifyorder)
orderRouter.post("/userorder",authenticateToken,userorder)    

export default orderRouter