const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.messagecontainer');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Using Constraint API to check form validity
    isValid = form.checkValidity();

    if (!isValid) {
        showMessage('Please fill out all the fields', 'blue');
        return;
    }

    // Check if passwords match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        setBorderColor(password1El, 'green');
        setBorderColor(password2El, 'green');
    } else {
        passwordMatch = false;
        showMessage('Make sure passwords match', 'blue');
        setBorderColor(password1El, 'blue');
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordMatch) {
        showMessage('Successfully Registered!', 'green');
    }
}

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    if (color === 'blue') {
        messageContainer.style.borderColor = 'blue';
    } else {
        messageContainer.style.borderColor = 'green';
    }
}

function setBorderColor(element, color) {
    element.style.borderColor = color;
}

function storeFormData(){
    // Get data from inputs into variables for storage in localstorage
    const user={
    name:form.name.value,
    phone:form.phone.value,
    email:form.email.value,
    website:form.website.value,
    password:form.password.value
    };
    // do something with data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // console.log(e);
    // validate form
    validateForm();
    // submit data if valid
    if (!isValid && passwordMatch){return;}else{storeFormData();}

}

// event linstener
form.addEventListener('submit', processFormData)