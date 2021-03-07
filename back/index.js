const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const dotenv = require('dotenv')
const passport = require('passport')

const passportConfig = require('./passport')
const db = require('./models')
const userAPIRouter = require('./routes/user')
const postAPIRouter = require('./routes/post')
const postsAPIRouter = require('./routes/posts')

dotenv.config()
const app = express()
db.sequelize.sync()
passportConfig()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
  resave: false,  //  매번 세션 강제 저장
  saveUninitialized: false,  //   빈값도 저장
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,  //  js에서 쿠키 접근 불가
    secure: false //  https를 쓸때 true
  },
  name: 'taewo' //  브라우져에 저장되는 쿠키의 이름
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/user', userAPIRouter)
app.use('/api/post', postAPIRouter)
app.use('/api/posts', postsAPIRouter)


app.listen(3065, () => {
  console.log('Server is running on http://localhost:3065')
})

