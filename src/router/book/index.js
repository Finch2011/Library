import { Router } from "express";
import _ from "lodash";
import controller from "./controller.js";
import { validationData } from "../../middleware/validation.js";
import { createbook, updatebook } from "./validation.js";

const book = Router()
book.get("/" , controller.getAllBook , validationData)
book.get("/:title" , controller.getSingelBook , validationData)
book.post("/" , controller.creatBook , validationData , createbook)
book.put("/" , controller.updateBook , validationData , updatebook)
book.delete("/" , controller.deleteBook , validationData)
export default book ;