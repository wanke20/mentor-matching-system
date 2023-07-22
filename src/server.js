import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";

const Participant = mongoose.model("Participant");
// const Mentor = mongoose.model("Mentor");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (response) => {
    response.send(await Participant.find());
});

// app.put("/", function (request, response) {
//     Product.findOne({ _id: request.params.id }, (err, product) => {
//         if (err) {
//             response.status(500).send(err);
//         } else {
//             product.name = request.body.name;
//             product.price = request.body.price;
//             product.save((err) => {
//                 if (err) {
//                     response.status(500).send(err);
//                 } else {
//                     response.send(product);
//                 }
//             });
//         }
//     });
// });

// app.post("/", async (request, response) => {
//     var participant = new Participant();
//     participant.name = request.body.name;
//     participant.description = request.body.description;
//     participant.save((err) => {
//         if (err) {
//             response.status(500).send(err);
//         } else {
//             response.send(participant);
//         }
//     });
// });
