const express = require('express');
const router = express.Router();
const gallery = require('./controller/Photo.controller');


const multer = require('multer');
const { v4: uuidv4 } = require('uuid')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'photoService')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
let upload = multer({ storage, fileFilter })


router.post('/add', upload.single('photo'), function (req, res) {

    const photo = req.file.filename;

    const newUserData = { photo }

    gallery.add(newUserData, function (err, user) {
        if (err) {
            res.status(404);
            res.json({
                error: "user not created"
            })
        } else {
            res.json(user)
        }
    })

});
module.exports = router;