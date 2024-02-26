const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const auth = (req, res, next) => {
  try {
    const userToken = req.headers["authorization"];
    if (!userToken) return res.status(401).send({ msg: "Unauthorized" });
    console.log(userToken);
    const token = userToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send({ msg: "Unauthorized" });
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
};

module.exports = auth;
