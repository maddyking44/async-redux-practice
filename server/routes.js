const express = require('express')
const router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getGrats()
    .then(grats => {
        res.json(grats)
    })
})

router.post('/form', function (req, res) {
    db.saveGrats(req.body)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})