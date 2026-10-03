import jwt from "jsonwebtoken";
import c from "config";
export default async function Authentication(req, res, next) {
    const token = req.headers.auth_token
    console.log(token)
    const verify = await jwt.verify(token , c.get("SecrtKye.addres"))
    console.log(verify)
    next();
}
