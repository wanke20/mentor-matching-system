import express from 'express';
var app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

var Participant = mongoose.model('Participant');
var Mentor = mongoose.model('Mentor');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(request, response) => {
    response.send(await Participant.find()); 
});

app.put('/', async(request, response) => {
    Product.findOne({ _id: request.params.id }, (err, product) => {
        if (err) {
            response.status(500).send(err);
        } else {
            product.name = request.body.name;
            product.price = request.body.price;
            product.save((err) => {
                if (err) {
                    response.status(500).send(err);
                } else {
                    response.send(product);
                }
            });
        }
    });
});

app.post('/', async(request, response) => {
    var participant = new Participant();
    participant.name = request.body.name;
    participant.description = request.body.description;
    participant.save((err) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.send(participant);
        }
    });
});