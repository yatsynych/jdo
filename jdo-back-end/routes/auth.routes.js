const User = require('../models/User')
const express = require('express')
const router = express()
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')

router.post(
  '/signup',
  [
    check('email', "Incorect email").isEmail(),
    check('password', "Password Min lenght 6 symbols").isLength({min: 6}),
    check('firstName', "First Name Min lenght 2 symbols").isLength({min: 2}),
    check('lastName', "Last Name Min lenght 2 symbols").isLength({min: 2})
  ],
  async (req, res) => {

    try {     

      const result = await User.deleteOne({ email: 'test@test.com' })

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'Incorect registration data',
          errors: errors.array()
        })
      }

      const {email, password, firstName, lastName} = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(406).json({
          message: "User exists"
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      }).then(user => res.status(201).json({
        message: "User created"
      }))

    } catch(e) {
      console.log(e)
      //res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(500).json({message: "Internal Error."})
    }
  }

)

router.post(
  '/signin',
  [
    check('email', "Enter valid email").isEmail().normalizeEmail(),
    check('password', "Enter password").exists().isLength({min: 6})
  ],
  async (req, res) => {

    try {
  
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'Incorect email or password',
          //errors: errors.array()
        })
      }

      // Get all users List

/*
      User.find({}, function(err, users) {
        var userMap = {}
        users.forEach(function(user) {
          userMap[user._id] = user
        })
        res.send(userMap); 
      })
*/    

      

      //console.log(result)

      const {email, password} = req.body

      const hashedPassword = await bcrypt.hash(password, 12)

      const user = await User.findOne({ email, password: hashedPassword })

      if (!user) {
        return res.status(406).
          json({
            message: 'Incorect email or password'
          })
      }

      res.status(200).json({
        message: 'Ok',
        'user': {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
      })

    } catch(e) {
      console.log(e)
      res.status(500).json({message: "Error. Try.", 'error': e})
    }

  },
)

module.exports = router