const Email = require('../models/Email');

function emailAdd(data, cb) {
    let newEmail = new Email(data);
    newEmail.save(function (err, email) {
        if (err) {
            cb(err)
        } else {
            cb(null, email);
        }
    });

};
module.exports = {
    add: emailAdd
}