const express = require("express")
const router = express.Router()
const isLoggedIn = require("../middleware/isLoggedIn")
const Movie = require("../models/Movie.model")

router.get("/list", isLoggedIn, (req, res, next) => {

    Movie
        .find()
        .then(movies => res.json(movies))
        .catch(error => { next(error) })
})

module.exports = router