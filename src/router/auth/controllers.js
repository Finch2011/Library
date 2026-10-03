import _ from "lodash";
import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import c from "config";

export default new (class {
  async register(req, res) {
    const body = _.pick(req.body, ["email", "password"]);
    const exists = await User.findOne({ email: body.email });
    if (exists) return res.status(400).send("email was taken");
    const saltRound = 10;
    body.password = await bcrypt.hash(body.password, saltRound);
    const newUser = await User.create(body);
    res.json({
      msg: "Registration complete!!!",
      data: _.pick(newUser, ["email", "id"]),
    });
  }
  async login(req, res) {
    const body = _.pick(req.body, ["email", "password"]);
    const exists = await User.findOne({ email: body.email });
    if (!exists) return res.status(400).send("Invalid Email & Password");
    const check = await bcrypt.compare(body.password, exists.password);
    if (!check) return res.status(400).send("Invalid Email & Password");
    const paylaod = { id: exists.id };
    const token = await jwt.sign(paylaod, c.get("SecrtKye.addres"));
    res.json({
        msg : "login completed !!!" ,
        token : token
    })
  }

})();
