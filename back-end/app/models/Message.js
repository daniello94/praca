const mongoose = require('mongoose');


mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

const schema = mongoose.Schema({
    oderStan: {
        type: String,
        default: "Oczekujący",
    },
    firstName: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Message', schema);