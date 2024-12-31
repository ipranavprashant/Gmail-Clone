if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectToMongo = require("./DB/connectToMongo");
const userController = require("./Controller/userController");
const emailController = require("./Controller/emailController");

var bodyParser = require("body-parser");
const requireAuth = require("./Middlewares/requireAuth");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, origin || "*");
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(cookieParser());

// app.all("/", (req, res) => {
//   res.send("I was invoked!!");
// });

app.get("/", (req, res) => {
  res.json({
    message:
      "Gmail Backend : created by => Pranav Prashant (ipranavprashant@gmail.com)",
  });
});

connectToMongo();

//routes specific to authorization
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/fetch-user/:id", userController.fetchUser);
app.get("/fetch-all-users/", userController.fetchAllUsers);

// //routes specific to emails
app.post("/create-email", requireAuth, emailController.createEmail);
app.get("/fetch-all-emails", requireAuth, emailController.fetchAllEmails);
app.get(
  "/fetch-specific-email/:id",
  requireAuth,
  emailController.fetchSpecificEmail
);
app.put("/update-email/:id", requireAuth, emailController.updateEmail);
app.delete("/delete-email/:id", requireAuth, emailController.deleteEmail);
app.get(
  "/user-specific-emails/:id",
  requireAuth,
  emailController.emailsSpecificToAUser
);

const port = 4010;

app.listen(port, () => {
  console.log(`The server is up and running at the port no: ${port}`);
});
