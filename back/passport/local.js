const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt')
const db = require('../models')

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'password'
  }, async (userId, password, done) => {
    try {
      const user = await db.User.findOne({ where: { userId }})
      if (!user) return done(null, false, { reason: '존재하지 않는 사용자입니다.' })
      const result = await bcrypt.compare(password, user.password)
      if (!result) return done(null, false, { reason: '비밀번호가 틀립니다.' }) //  done의 첫번째 파라미터는 에러, 두번째는 성공했을때 사용자정보, 세번째는 로직상의 에러
      return done(null, user)
    } catch (e) {
      console.error(e)
      return done(e)
    }
  }))
}