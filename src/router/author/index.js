import { Router } from "express";
import authorController from "./controllers.js";

const router = Router();

router.get("/", authorController.getAllAuthor);
router.get("/:id", authorController.getSingelAuthor);
router.post("/", authorController.creatAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

export default router;