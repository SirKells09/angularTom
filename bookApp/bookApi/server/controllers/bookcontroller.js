var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var Book = sequelize.import('../models/bookmodel.js')


router.post('/create', (req, res) => {
    Book.create({
        nameOfBook: req.body.bookName,
        author: req.body.author,
        genre: req.body.genre,
        pubYear: req.body.pubYear,
        rating: req.body.rating
    }).then(
        function createSuccess(book) {
            res.json({
                book: book,
                messgae: "Book put on the shelf"

            })
        }
    )
})

router.get('./getall', (req, res) => {
    Book.findAll({})
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json({ error: err }))
})

router.delete("./delete/:id", (req, res) => {
    Book.destroy({
        where: { id: req.params.id }
    })
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json({
            error: err
        })
        )
})
router.put('./:id', (req, res) => {
    Book.update(
        {
            nameOfBook: req.body.nameOfBook,
            author: req.body.author,
            genre: req.body.genre,
            pubYear: req.body.pubYear,
            rating: req.body.rating
        },
        { where: { id: req.params.id } },
    )
        .then(function([updatedBook]){
            res.json(updatedBook)
        }).catch(next)
})