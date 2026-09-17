import mongoose from "mongoose";
import { Library } from "../../models/library.js";
import _ from "lodash";

export default new (class {
  async getAllBook(req, res) {
    const books = await Library.find();
    res.json({
      mag: "All Book is Here !",
      data: books,
    });
  }
  async getSingelBook(req, res) {
    const title = req.params.title;
    const target = await Library.findOne({ title: title });
    if (!target) return res.status(404).send("Book dose not exists !");
    res.json({
      msg: "Book is Here !",
      data: target,
    });
  }
  async creatBook(req, res) {
    const data = _.pick(req.body, ["title", "description", "author"]);
    const newBook = await Library.create(data);
    res.json({
      msg: " Book was created !",
      data: newBook,
    });
  }
  async updateBook(req, res) {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send("Invalid ID")
    const data = _.pick(req.body, ["title", "description", "author"]);
    const target = await Library.findByIdAndUpdate(req.params.id , data )
    if(!target) return res.status(404).send("Book dose not exists!")
    res.json(target)


  }
  async deleteBook(req, res) {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send("Invalid ID")
    const target = await Library.findByIdAndDelete(req.params.id , data )
    if(!target) return res.status(404).send("Book dose not exists!")
    res.json(target)
  }
})();
