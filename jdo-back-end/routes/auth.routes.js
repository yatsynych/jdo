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
            
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: true,
          errors: errors.array(),
          message: 'Incorect registration data'
        })
      }

      const {email, password, firstName, lastName} = reg.body

      const candidate = await User.findOne({ email })

            if (candidate) {
        return res.status(500).json({
          error: true,
          message: "User exists"
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
       })

      await user.save()

      res.status(201).json({
        error: true,
        message: "User created"
      })

    } catch(e) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(500).json({
        error: true,
        message: "Error. Try!"
      })
    }
  }

)

router.post(
  '/signin',
  [
    check('email', "Enter valid email").isEmail().normalizeEmail(),
    check('password', "Enter password").exists()
  ],
  async (req, res) => {

    try {
  
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
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

      //User.deleteOne({ _id: entry._id })

      const {email, password} = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(404).json({ message: 'Incorect email or password'}) // User not found
      }

      /*

test@test.com
123454

      */

      /*
      User.create({
        email: email,
        password: password,
      }).then(user => res.json(user));
      */

      //res.json({ token, userId: user.id})
      res.status(200).json({ message: 'Ok', 'user': user})

    } catch(e) {
      res.status(500).json({message: "Error. Try."})
    }

  },
)

module.exports = router