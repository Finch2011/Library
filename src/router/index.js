import { Router } from "express";
import bookRouter from "./book/index.js";
import authorRouter from "./author/index.js";
import authRouter from "./auth/index.js";        

const router = Router();

router.use("/book", bookRouter);
router.use("/author", authorRouter);
router.use("/auth", authRouter);             

export default router;