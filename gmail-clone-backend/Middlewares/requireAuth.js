const jwt = require("jsonwebtoken");
const User = require("../Model/UserSchema");

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.Authorization;

    const decodedToken = jwt.verify(token, process.env.SECRETKEY);

    if (Date.now() > decodedToken.expirationTime) {
      return res.status(401).send("Token expired");
    }

    const user = await User.findById(decodedToken.sub);

    if (!user) {
      return res.status(401).send("User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in requireAuth middleware:", error);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = requireAuth;
