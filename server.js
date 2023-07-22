import express from 'express';
var app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

var Participant = mongoose.model('Participant');
var Mentor = mongoose.model('Mentor');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello World!');
});