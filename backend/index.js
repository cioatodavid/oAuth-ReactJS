const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const authRoute = require('./routes/auth.route');


const passportSetup = require('./passport');

const app = express();

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true
  }
));

app.use('/auth', authRoute);

app.listen(5000, () => {
  console.log('http://localhost:5000/');
});

