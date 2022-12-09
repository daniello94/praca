const MyProject = require('../models/MyProject');

function addProject(data, cb) {
    let newProject = new MyProject(data);

    newProject.save(function (err, project) {
        if (err) {
            cb(err)
        } else {
            cb(null, project)
        }
    })
};

function photoAdd(data, cb) {
    MyProject.updateOne(
        { _id: data[0] },
        { $push: { gallery: data[1] } },
        function (err, photo) {
            if (err) {
                cb(err)
            } else {
                cb(null, photo)
            }
        })
};

function listPhoto(cb) {
    MyProject.find().lean().exec(function (err, clients) {
        if (err) {
            cb(err)
        } else {
            cb(null, clients)
        }
    })
};
function getPhoto(id, cb) {
    MyProject.findById(id).exec(function (err, client) {
        if (err) {
            cb(err)
        } else {
            cb(null, client)
        }
    })
};
function updateStan(id, data, cb) {
    MyProject.updateOne(
        { _id: id },
        data,
        function (err, message) {
            if (err) {
                cb(err)
            } else {
                cb(null, message)
            }
        })
};

function delateProject(id, cb) {
    MyProject.deleteOne({ _id: id }, function (err, message) {
        if (err) {
            cb(err)
        } else {
            cb(null, message)
        }
    })
};

module.exports = {
    add: addProject,
    addPhoto: photoAdd,
    list: listPhoto,
    get: getPhoto,
    update: updateStan,
    delate: delateProject
}