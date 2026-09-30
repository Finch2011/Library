import { Router } from "express";
import _ from "lodash";
import controller from "./controller.js";
import { validationData } from "../../middleware/validation.js";
import { createbook, updatebook } from "./validation.js";

const book = Router()
book.get("/:page" , controller.getAllBook )
book.get("/:title" , controller.getSingelBook )
book.post("/", createbook , controller.creatBook , validationData )
book.put("/:id" , updatebook ,controller.updateBook , validationData )
book.delete("/:id" , controller.deleteBook )
export default book ;