import { Router } from "express";
import bookRouter from "./book/index.js"
const router = Router()
router.use("/book" , bookRouter)
export default router