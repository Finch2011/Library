import mongoose from "mongoose";
import { Library } from "../../models/library.js";
import _ from "lodash";
import { Author } from "../../models/author.js";

export default new (class {
  async getAllBook(req, res) {
    const page = Number(req.params.page) || 1;
    const count = 9;
    const books = await Library.find()
      .limit(count)
      .skip((page - 1) * count)
      .populate("author", "name");
    res.json({
      msg: "All Book is Here !",
      data: books,
    });
  }

  async getSingelBook(req, res) {
    const title = req.params.title;
    const target = await Library.findOne({ title }).populate("author", "name");
    if (!target) return res.status(404).send("Book does not exists !");
    res.json({
      msg: "Book is Here !",
      data: target,
    });
  }

  async creatBook(req, res) {
    const data = _.pick(req.body, ["title", "description", "author"]);
  
    if (!mongoose.Types.ObjectId.isValid(data.author))
      return res.status(400).send("Invalid Author ID");
  
    const author = await Author.findById(data.author);
    if (!author) return res.status(404).send("Author not found");
  
    data.author = author._id;
  
    const newBook = await Library.create(data);
چ
    const populated = await Library.findById(newBook._id).populate(
      "author",
      "firstName LastName Age"
    );
  
    res.json({
      msg: "Book was created !",
      data: populated,
    });
  }
  async updateBook(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send("Invalid ID");

    const data = _.pick(req.body, ["title", "description", "author"]);

    if (data.author) {
      if (!mongoose.Types.ObjectId.isValid(data.author))
        return res.status(400).send("Invalid Author ID");
      const author = await Author.findById(data.author);
      if (!author) return res.status(404).send("Author not found");
      data.author = author._id;
    }

    const target = await Library.findByIdAndUpdate(req.params.id, data, {
      new: true,
    }).populate("author", "name");

    if (!target) return res.status(404).send("Book does not exists!");
    res.json(target);
  }

  async deleteBook(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send("Invalid ID");

    const target = await Library.findByIdAndDelete(req.params.id);
    if (!target) return res.status(404).send("Book does not exists!");
    res.json(target);
  }
})();