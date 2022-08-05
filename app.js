const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const userRoutes = require('./routers/userRoutes');
const dogRoutes = require('./routers/dogRoutes');
const productRoutes = require('./routers/productRoutes')
const cartRoutes = require('./routers/cartRoutes')
const { checkUser } = require('./middleware/authMiddleware');

require('dotenv').config()

const app = express()

app.use((cors()))

app.use(express.static('public'));

app.use(express.json())

app.use(cookieParser())

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: 180 * 60 * 1000},
  store: MongoStore.create({ mongoUrl: process.env.DB_URI })
}))

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.DB_PORT))
  .then(() => console.log(`Server started running on port ${process.env.DB_PORT}`))
  .catch((err) => console.log(err));

app.get('*', checkUser)

app.use(userRoutes, dogRoutes, productRoutes, cartRoutes)