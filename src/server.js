// this is the main server file for the app
const express = require("express");
const cors = require("cors");

const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost");

var Participant = require("./participant.js");

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (_request, response) => {
    Participant.find().then((savedUser) => {
        response.send(savedUser);
    })
});

app.put("/",  (request, response) => {
    Participant.findOneAndUpdate({ _id: request.body._id }, 
        request.body, { new: true })
        .then((savedUser) => {
            response.send(savedUser);
        })
        .catch((err) => {
            response.status(500).send(err);
        });
});

app.post("/", async (request, response) => {
    var participant = new Participant();
    participant.name = request.body.name;
    participant.description = request.body.description;
    participant
        .save()
        .then((savedUser) => {
            response.send(savedUser);
        })
        .catch((err) => {
            response.status(500).send(err);
        });
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});