// const jwt = require("jsonwebtoken");
// const User = require("../Model/UserSchema");

// const requireAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies.Authorization;
//     if (!token) {
//       return res
//         .status(401)
//         .send("Please login before attempting to access a secure route!");
//     }

//     const decodedToken = jwt.verify(token, process.env.SECRETKEY);

//     if (Date.now() > decodedToken.expirationTime) {
//       return res.status(401).send("Token expired");
//     }

//     const user = await User.findById(decodedToken.sub);

//     if (!user) {
//       return res.status(401).send("User not found");
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     console.error("Error in requireAuth middleware:", error);
//     return res.status(401).send("Unauthorized");
//   }
// };

// module.exports = requireAuth;

const jwt = require("jsonwebtoken");
const User = require("../Model/UserSchema");

const requireAuth = async (req, res, next) => {
  try {
    // Retrieve token from cookie or Authorization header
    const token =
      req.cookies.Authorization || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send("Please login before attempting to access a secure route!");
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.SECRETKEY);

    // Validate token expiration (optional if using `exp`)
    if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).send("Token expired");
    }

    // Fetch user from database
    const user = await User.findById(decodedToken.sub);
    if (!user) {
      return res.status(401).send("User not found");
    }

    req.user = user; // Attach user to request object
    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error("Error in requireAuth middleware:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).send("Token expired");
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send("Invalid token");
    }

    return res.status(401).send("Unauthorized");
  }
};

module.exports = requireAuth;
