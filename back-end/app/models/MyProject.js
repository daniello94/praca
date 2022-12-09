const mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
const Photo = {
    photo: {
        type: String,
        default: ""
    }
}
const schema = mongoose.Schema({
    gallery: [Photo],
    description: {
        type: String,
        default: ''
    },
    oderStan: {
        type: String,
        default: 'Close'
    },
    title: {
        type: String,
        default: ''
    },
    quantity: {
        type: String,
        default: "",
    },
    hederPhoto: {
        type: String,
        default: ''
    },
    style: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('MyProject', schema);