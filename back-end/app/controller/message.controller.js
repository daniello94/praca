const Message = require('../models/Message');

function addMessage(data, cb) {
    let newMessage = new Message(data);

    newMessage.save(function (err, message) {
        if (err) {
            cb(err)
        } else {
            cb(null, message)
        }
    })
};

function delateMessage(id, cb) {
    Message.deleteOne({ _id: id }, function (err, message) {
        if (err) {
            cb(err)
        } else {
            cb(null, message)
        }
    })
};

function getMessage(id, cb) {
    Message.findById(id).exec(function (err, message) {
        if (err) {
            cb(err)
        } else {
            cb(null, message)
        }
    })
};

function listMessage(cb) {

    Message.find().lean().sort({oderStan:1}).exec(function (err, message) {
        if (err) {
            cb(err)
        } else {
            cb(null, message)
        }
    })
};

function updateMessage(id, data, cb) {
    Message.updateOne(
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

module.exports = {
    add: addMessage,
    messageDelate: delateMessage,
    get: getMessage,
    list: listMessage,
    update: updateMessage
}
