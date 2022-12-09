const mongoose = require('mongoose');


mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

const schema = mongoose.Schema({
    dataEmployee: {
        emailName: {
            type: String,
            default: ''
        },
        emailPhoneNumber: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        emailMessage: {
            type: String,
            default: ''
        }
    },
    dataClient: {
        emailNameClient: {
            type: String,
            default: ''
        },
        emailPhoneNUmberClient: {
            type: String,
            default: ''
        },
        emailClient: {
            type: String,
            default: ''
        },
        emailMessageClient: {
            type: String,
            default: ''
        }
    },


});
module.exports = mongoose.model('Email', schema);