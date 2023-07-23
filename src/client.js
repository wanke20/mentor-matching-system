var inputField = document.getElementById("key");
var resultField1 = document.getElementById("resultField1");
var resultField2 = document.getElementById("resultField2");
var form1 = document.getElementById("form1");

form1.addEventListener("submit", function (event) {
    var userInput = inputField.value;
    if (userInput.length === 0) {
        resultField2.innerText = "Please enter a valid key";
    } else {
        getElementByKeyword(userInput);
    }
    event.preventDefault();
});

function getAllElements() {
    fetch('http://localhost:3000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        resultField1.innerText = parseElements(data);
    })
    .catch(() => {
        resultField2.innerText = "Error fetching from server";
    });
}

function getElementByKeyword(key) {
    fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        var list = [];
        for (var i = 0; i < data.length; i++) {
            if (Object.values(data[i]).includes(key) || data[i].skills.includes(key)) {
                list.push(data[i]);
            }
        }
        resultField1.innerText = parseElements(list);
    })
    .catch((error) => {
        resultField2.innerText = "Error fetching from server";
        console.log(error);
    });
}

var parseElements = function(data) {
    let str = "";
    for (var i = 0; i < data.length; i++) {
        str += "Student ID: " + data[i]._id + "\n";
        str += "Name: " + data[i].name + "\n";
        str += "Description: " + data[i].description + "\n";
        str += "Skills: " + data[i].skills + "\n";
        str += "\n";
    }
    return str;
}
