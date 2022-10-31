const jwt = require('jsonwebtoken');



const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      message: 'failure',
    });
  } else {
    next();
  }
};

const generateJWT = (req, res, next) => {
  const token = jwt.sign(
    {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
      loginType: req.user.loginType,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  next();
};

const sendJWT = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfull',
    user: req.user,
    cookies: req.cookies,
  });
};

const logout = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({
    success: true,
    message: 'successfull',
  });
};

module.exports = {
  authCheck,
  generateJWT,
  sendJWT,
  logout,
};