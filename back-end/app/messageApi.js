const express = require('express');
const router = express.Router();
const message = require('./controller/message.controller');

router.post('/add', function (req, res) {
    message.add(req.body, function (err, message) {
        if (err) {
            res.status(404);
            res.json({
                error: "Message not created"
            })
        } else {
            res.json(message)
        }
    })

});

router.delete('/delate/:id', function (req, res) {
    message.messageDelate(req.params.id, function (err, data) {
        if (err) {
            res.status(404)
            res.json({
                error: "Message not found"
            })
        } else {
            res.json(data)
        }
    })
});

router.post('/all', function (req, res) {
    message.list(function (err, messages) {
        if (err) {
            res.status(404);
            res.json({
                error: "Messages not found"
            });
        } else {
            res.json(messages)
        }
    })
});

router.get('/:id', function (req, res) {
    message.get(req.params.id, function (err, message) {
        if (err) {
            res.status(404);
            res.json({
                error: 'Message not found'
            })
        } else {
            res.json(message)
        }
    })
});

router.put('/update/:id', function (req, res) {
    message.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(404);
            res.json({
                error: "not found"
            })
        } else {
            res.json(data)
        }
    })
});
module.exports = router