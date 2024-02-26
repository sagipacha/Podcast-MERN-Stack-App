const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET || "DD@DD";
  console.log(secret);
  const token = jwt.sign(payload, secret, {
    expiresIn: "720h",
  });
  return token;
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET || "DD@DD";
  console.log(secret);
  const payload = jwt.verify(token, secret);
  console.log(payload);
  return payload;
};

module.exports = { generateToken, verifyToken };
