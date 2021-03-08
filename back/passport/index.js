const passport = require('passport')
const db = require('../models')
const local = require('./local')

module.exports = () => {
  passport.serializeUser((user, done) => {  //  서버쪽에 [{ id:3, cookie: 'asdfasdf' }]
    return done(null, user.id)  //  여기의 user.id값이 deserializeUser의 첫번째 인자
  })

  passport.deserializeUser(async (id, done) => {  // 여기의 id값은 selializeUser에서 넘어온 인자
    try {
      const user = await db.User.findOne({
        where: { id }
      })
      return done(null, user) //  req.user
    } catch (e) {
      console.error(e)
      return done(e)
    }
  })

  local()
}