import mongoose from "mongoose";
import { Author } from "../../models/author.js";
import _ from "lodash";

export default new (class {
  async getAllAuthor(req, res) {
    const authors = await Author.find();
    res.json({
      msg: "All Authors is Here !",
      data: authors,
    });
  }

  async getSingelAuthor(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send("Invalid ID");

    const target = await Author.findById(req.params.id);
    if (!target) return res.status(404).send("Author does not exists !");
    res.json({
      msg: "Author is Here !",
      data: target,
    });
  }

  async creatAuthor(req, res) {
    const data = _.pick(req.body, ["firstName", "LastName", "Age", "birth"]);

    if (!data.firstName || !data.LastName || !data.Age)
      return res.status(400).send("firstName, LastName and Age are required");

    if (data.Age < 18) return res.status(400).send("Age must be 18 or older");

    const newAuthor = await Author.create(data);
    res.json({
      msg: "Author was created !",
      data: newAuthor,
    });
  }

  async updateAuthor(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send("Invalid ID");

    const data = _.pick(req.body, ["firstName", "LastName", "Age", "birth"]);

    if (data.Age && data.Age < 18)
      return res.status(400).send("Age must be 18 or older");

    const target = await Author.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!target) return res.status(404).send("Author does not exists !");
    res.json(target);
  }

  async deleteAuthor(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send("Invalid ID");

    const target = await Author.findByIdAndDelete(req.params.id);
    if (!target) return res.status(404).send("Author does not exists !");
    res.json(target);
  }
})();