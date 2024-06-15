const { Router } = require("express");
const auth = require("../middlewares/auth");
const {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
  userForgotPassword,
  userResetPassword,
  generateVerificationToken,
  sendVerificationEmail,
  getToken,
  getOnlineUser
} = require("../controllers/users.contollers");
const router = Router();

// Routes that require authentication
router.get("/", auth, getUsers);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

// Routes that doesn't require authentication
router.post("/generate-verification-token", generateVerificationToken);
router.post("/send-verification-email", sendVerificationEmail);
router.post("/register", register);
router.post("/login", login);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password/:id/:token", postResetPassword);
// router.get("/reset-password/:id/:token", getResetPassword);

//^ forgot password
router.post("/forgotPassword",userForgotPassword);
//^ reset password
router.post("/resetPassword", auth, userResetPassword);



router.get("/getOnlineUser", auth, getOnlineUser);

router.post("/verification", getToken);

module.exports = router;
