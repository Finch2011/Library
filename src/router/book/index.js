import { Router } from "express";
import controller from "./controller.js";
import { validationData } from "../../middleware/validation.js";
import { createbook, updatebook } from "./validation.js";
import Authentication from "../../middleware/auth.js";

const book = Router();


book.get("/page/:page", controller.getAllBook);
book.get("/title/:title", controller.getSingelBook);
book.post("/", createbook, validationData, Authentication, controller.creatBook);
book.put("/:id", updatebook, validationData, Authentication, controller.updateBook);
book.delete("/:id", Authentication, controller.deleteBook);

export default book;