const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config");

//listen to port
app.listen(1111);

//import routes
const postsRoute = require("./routes/posts");
//

//middlewares
// app.use((req, res, next) => {
// 	res.append("Access-Control-Allow-Origin", ["*"]);
// 	res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
// 	res.append("Access-Control-Allow-Headers", "Content-Type");
// 	next();
// });
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);
//

//routes
app.get("/", (req, res) => {
	res.send("You have reached Home. ");
});
//

//connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to DB!");
	}
);
