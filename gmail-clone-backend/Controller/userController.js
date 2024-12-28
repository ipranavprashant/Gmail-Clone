const User = require("../Model/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const profilepic = "https://avatar.iran.liara.run/public";

    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      profilepic: profilepic,
    });

    res.status(201).json({ newUser: newUser });
  } catch (err) {
    console.log("Error creating an user! " + err);
    res.status(500).json({ err: err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userArray = await User.find({ email: email });

    // console.log(user);
    const user = userArray[0];

    if (!user) {
      returnres.sendStatus(401);
    }

    const isRightPassword = bcrypt.compareSync(password, user.password);

    if (!isRightPassword) {
      returnres.sendStatus(401);
    }

    const expirationTime = Date.now() + 60 * 60 * 24 * 30 * 1000;

    const token = jwt.sign(
      { sub: emp._id, expirationTime: expirationTime },
      process.env.SECRETKEY
    );

    await res.cookie("Authorization", token, {
      httpOnly: true,
      // sameSite: lax,
    });

    console.log("Successfully Signed in and the token is: ", token);
    res.json({ token });
  } catch (err) {
    console.log("Error logging in! " + err);
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.status(200).json({ message: "Successfully cleared the cookie!" });
  } catch (err) {
    console.log("Error logging out!");
  }
};

const fetchUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.sendStatus(404);
    }
    res.status(200).json({ user: user });
  } catch (err) {
    console.log("Error fetching the specific user!");
    res.status(500).json({ error: err });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ UserList: users });
  } catch (err) {
    console.log("Error fetching all the users");
    res.send(500).json({ error: err });
  }
};

module.exports = {
  signup: signup,
  login: login,
  logout: logout,
  fetchUser: fetchUser,
  fetchAllUsers: fetchAllUsers,
};
