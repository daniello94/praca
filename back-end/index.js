require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const apiUser = require('./app/userApi');
const apiMessage = require('./app/messageApi');
const apiEmail = require('./app/emailApi');
const apiProject = require('./app/myProjectApi');
const apiPhoto = require('./app/photoApi');

const config = {
    origin: 'http://' + process.env.DB_HOST
};

app.use(express.json());
app.use(cors());
app.use('/photo', express.static('photoService'));
app.set('view engine', 'ejs');

app.use('/user', apiUser);
app.use('/message', apiMessage);
app.use('/email', apiEmail);
app.use('/project', apiProject);
app.use('/photo', apiPhoto);

app.get('/', cors(config), function (req, res) {
    res.status(219).json("Projekt serwisu")
});

app.listen(process.env.PORT, function () {
    console.log(`Beck-end serwisu "Strona Firmowa" na porcie ${process.env.PORT} działą prawidłowo`);
});