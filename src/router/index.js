import { Router } from "express";
import bookRouter from "./book/index.js"
import authorRouter from "./author/index.js"
const router = Router()
router.use("/book" , bookRouter)
router.use("/author" , authorRouter)
export default router