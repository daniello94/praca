const Photo = require('../models/Photo');

function addPhoto(data, cb) {
    let newPhoto = new Photo(data);

    newPhoto.save(function (err, project) {
        if (err) {
            cb(err)
        } else {
            cb(null, project)
        }
    })
};



module.exports = {
    add: addPhoto, 
}