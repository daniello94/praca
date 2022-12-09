const express = require('express');
const router = express.Router();
const project = require('./controller/myProject.controller');

router.post('/add', function (req, res) {
    project.add(req.body, function (err, message) {
        if (err) {
            res.status(404);
            res.json({
                error: "Project not created"
            })
        } else {
            res.json(message)
        }
    })

});

router.post('/all', function (req, res) {
    project.list(function (err, clients) {
        if (err) {
            res.status(404);
            res.json({
                error: 'photo not found'
            })
        } else {
            res.json(clients)
        }
    })
});

router.get('/:id', function (req, res) {
    project.get(req.params.id, function (err, client) {
        if (err) {
            res.status(404);
            res.json({
                error: 'Project not found'
            })
        } else {
            res.json(client)
        }
    })
});

router.put('/photo/:id', function (req, res) {
    project.addPhoto([req.params.id,req.body], function (err, photo) {
        if (err) res.send(err)
        res.json(photo)
    })
});

router.put('/update/:id', function (req, res) {
    project.update(req.params.id, req.body, function (err, data) {
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
router.delete('/delate/:id', function (req, res) {
    project.delate(req.params.id, function (err, data) {
        if (err) {
            res.status(404)
            res.json({
                error: "Project not found"
            })
        } else {
            res.json(data)
        }
    })
});


module.exports = router