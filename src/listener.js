var inputField = document.getElementById("participantId");
var resultField1 = document.getElementById("resultField1");
var resultField2 = document.getElementById("resultField2");
var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    var userInput = inputField.value;
    if (userInput.length === 0) {
        resultField2.innerText = "Please enter a valid id";
    } else {
        resultField2.innerText = getElementById(userInput);
    }
    event.preventDefault();
});

function getAllElements() {
    fetch('http://localhost:3000', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        resultField1.innerText = parseElements(data);
    })
    .catch((error) => {
        resultField2.innerText = error;
    });
}

function getElementById(id) {
    fetch('http://localhost:3000/id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        resultField2.innerText = "success";
    })
    .catch((error) => {
        resultField2.innerText = "Cannot fetch id from server";
    });
}

var parseElements = function(data) {
    let str = "";
    for (var i = 0; i < data.length; i++) {
        str += "ID: " + data[i]._id + "\n";
        str += "Name: " + data[i].name + "\n";
        str += "Description: " + data[i].description + "\n";
        str += "Skills: " + data[i].skills + "\n";
        str += "\n";
    }
    return str;
}
