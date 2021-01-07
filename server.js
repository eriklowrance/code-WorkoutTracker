const express = require("express");
const app = express();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(require("./routes/html-routes"))
app.use(require("./routes/api-routes"))


app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT)
})