const express = require('express');
const router = express.Router();
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config();




router.get("/login/success",
  (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        cookies: req.cookies
      });
    }
  });

router.get("/login/failed",
  (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect(process.env.CLIENT_URL);
  });
});




router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/twitter",
  passport.authenticate("twitter"));

router.get(
  "/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);




module.exports = router; 