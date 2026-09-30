import express from "express"
import router from "./src/router/index.js";
import  config  from "config";
import connectedToMongoDB from "./src/start/db.js";

const app = express();
const port = config.get("port")

connectedToMongoDB();
app.use(express.json())
app.use("/api" , router)


app.listen(port , ()=> console.log(`app running on port ${port} `))