const { User } = require("../models/users.model");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../utils/jwt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Function to generate a verification token
const generateVerificationToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "720h",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

const getToken = async (req, res) => {
  const body = req.body;
  try {
      const token = body
      const payload = verifyToken(token.token)
      const user = await User.findOne({ email: payload.email });
      if (user) {
          return res.send({ user, token });
      }
      return res.status(401).send({ msg: 'Invalid token' });
  } catch (err) {
      console.log(err);
      res.status(400).send(err);
}
}

// Function to send a verification email
const sendVerificationEmail = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const verificationLink = `http://localhost:1754/verify/${email}/${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Verify Your Email Address",
      html: `Please click the following link to verify your email address: <a href="${verificationLink}">${verificationLink}</a>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent:", info.response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Error sending verification email");
  }
};

// Register
const register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Generate verification token
    const token = generateVerificationToken(req.body);

    // Encrypt password
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password: hash,
      role,
    });

    await user.save();

    // Send verification email
    // await sendVerificationEmail(email, verificationToken);

    return res.status(201).send({ user, token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(400).send("Error registering user");
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // Check if password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Generate token
        const token = generateToken({
          id: user._id,
          email: user.email,
          role: user.role,
        });
        console.log(token);
        return res.send({user:{id:user._id,email:user.email,role:user.role,fullName:user.fullName},token});
      }
      return res.status(401).send("Email or password are incorrect");
    }
    return res.status(401).send("Email or password are incorrect");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "720h",
    });
    const resetLink = `http://localhost:1754/reset-password/${oldUser._id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Password Reset",
      text: resetLink,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ status: "Email sent successfully" });
      }
    });

    console.log(resetLink);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "Internal server error" });
  }
};

// Get Reset Password
const getResetPassword = async (req, res) => {
  const { id, token } = req.params;
  try {
    const oldUser = await User.findById(id);
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "Internal server error" });
  }
};

// Post Reset Password
const postResetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  try {
    const oldUser = await User.findById(id);
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(id, { password: encryptedPassword });
    return res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "Internal server error" });
  }
};

// Get Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Error");
  }
};

// Update User
const updateUser = async (req, res) => {
  console.log(req.headers);
  const body = req.body;
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return res.send(user);
  } catch (error) {
    res.status(400).send("Error");
  }
};



// Delete User
const deleteUser = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const isDeleted = await User.findByIdAndDelete(id);
    if (isDeleted) {
      return res.send("Deleted successfully");
    }
    res.send("Not found");
  } catch (error) {
    res.status(400).send("Error");
  }
};

const getOnlineUser = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.log(error);
    res.status(404).send("Error");
}
};





module.exports = {
  login,
  getToken,
  forgotPassword,
  getResetPassword,
  register,
  getUsers,
  updateUser,
  deleteUser,
  postResetPassword,
  generateVerificationToken,
  sendVerificationEmail,
  getOnlineUser
};
