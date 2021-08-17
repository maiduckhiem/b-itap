import express from "express";
import { list, add, productId, read, remove } from "../controller/product";
const routes = express.Router();

routes.get("/product", list);
routes.post("/product", add);
routes.get("/product/:productId", read);
routes.delete('/product/:productId',remove)

routes.param("productId", productId);
module.exports = routes;
