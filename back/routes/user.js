const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../models')

router.get('/', (req, res) => {

})

router.post('/', async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    })
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12) //  salt는 10~13 사이로
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    })
    console.log('newUser', newUser)
    return res.status(200).json(newUser)
  } catch (e) {
    console.error(e)
    return next(e)
  }
})

router.get('/:id', (req, res) => {
  
})

router.post('/logout', (req, res) => {
  
})

router.post('/login', (req, res) => {
  
})

router.get('/:id/follow', (req, res) => {
  
})

router.post('/:id/follow', (req, res) => {
  
})

router.delete('/:id/follow', (req, res) => {
  
})

router.delete('/:id/posts', (req, res) => {
  
})

router.get('/:id/posts', (req, res) => {
  
})

module.exports = router