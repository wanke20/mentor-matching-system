var studentID = document.getElementById("id");
var nameField = document.getElementById("name");
var description = document.getElementById("description");
var skills = document.getElementById("skills");
var form2 = document.getElementById("form2");

const inputArray = [nameField, description, skills];

form2.addEventListener("submit", function (event) {
    if (studentID.value.length === 0) {
        studentID.ariaPlaceholder = "Please enter a valid Student ID";
    } else {
        update();
    }
    event.preventDefault();
});

function update() {
    fetch('http://localhost:3000/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameField.value,
            description: description.value,
            skills: [skills.value],
            _id: studentID.value
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("data");
        if (Object.keys(data).length === 0)
            addObject();
    })
    .catch((error) => console.log(error));
}

function addObject() {
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameField.value,
            description: description.value,
            skills: [skills.value],
            _id: studentID.value
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}