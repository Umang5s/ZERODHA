const { UsersModel } = require("../model/UsersModel"); // Adjusted to match your file structure
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.json({ status: false, message: "No token found" });
    }

    // Verify the token
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.json({ status: false, message: "Token verification failed" });
      } else {
        // Find user by decoded token's id
        const user = await UsersModel.findById(decoded.id);
        if (user) {
          return res.json({ status: true, user: user.username });
        } else {
          return res.json({ status: false, message: "User not found" });
        }
      }
    });
  } catch (error) {
    console.error("Error in user verification:", error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
