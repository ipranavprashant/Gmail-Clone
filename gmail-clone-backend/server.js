if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const cors = require("cors");

const connectToMongo = require("./DB/connectToMongo");
const userController = require("./Controller/userController");
const emailController = require("./Controller/emailController");

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

// app.all("/", (req, res) => {
//   res.send("I was invoked!!");
// });

connectToMongo();

//routes specific to authorization
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/fetch-user/:id", userController.fetchUser);
app.get("/fetch-all-users/", userController.fetchAllUsers);

// //routes specific to emails
app.post("/create-email", emailController.createEmail);
app.get("/fetch-all-emails", emailController.fetchAllEmails);
app.get("/fetch-specific-email/:id", emailController.fetchSpecificEmail);
app.put("/update-email/:id", emailController.updateEmail);
app.delete("/delete-email/:id", emailController.deleteEmail);
app.get("/user-specific-emails/:id", emailController.emailsSpecificToAUser);

const port = 5010;

app.listen(port, () => {
  console.log(`The server is up and running at the port no: ${port}`);
});
