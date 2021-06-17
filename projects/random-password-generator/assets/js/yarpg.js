const alertBox = document.getElementById('alert-box');
const yarpg = document.getElementById('yarpg');
const lengthValue = document.getElementById('length_value');
const passwordLength = document.getElementById('password-length');


const digits = '0123456789';
const punctuation = '!\"#$ %&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ascii_letters = ascii_lowercase + ascii_uppercase;
const printable = digits + ascii_letters + punctuation;


function changePasswordLengthValue() {
    updatePasswordLengthValue(lengthValue, passwordLength);
}

function updatePasswordLengthValue(element, value) {
    element.innerHTML = value.value;
}


function getPassword(passwordLength, characters) {
    let password = '';

    for (var cont = 0; cont < passwordLength; cont++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }

    return password;
}


function passwordGenerator() {
    let hasUppercase = document.getElementById('ascii_uppercase');
    let hasLowercase = document.getElementById('ascii_lowercase');
    let hasDigits = document.getElementById('digits');
    let hasPunctuation = document.getElementById('punctuation');


    if (!hasPunctuation.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_letters + digits);

    } else if (!hasDigits.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_letters + punctuation);

    } else if (!hasLowercase.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_uppercase + digits + punctuation);

    } else if (!hasUppercase.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_lowercase + digits + punctuation);

    } else if (!hasPunctuation.checked, !hasDigits.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_letters);

    } else if (!hasUppercase.checked, !hasLowercase.checked) {
        yarpg.value = getPassword(passwordLength.value, digits + punctuation);

    } else if (!hasUppercase.checked, !hasPunctuation.checked) {
        yarpg.value = getPassword(passwordLength.value, ascii_lowercase + digits);

    } else {
        yarpg.value = getPassword(passwordLength.value, printable);
    }
}


function copyPassword() {

    let generateButton = document.querySelector('.btn-generate');
    let showNewPassword = document.getElementById('new-password')

    // Select the text field.
    yarpg.select();
    // For mobile devices.
    yarpg.setSelectionRange(0, 99999);

    // Copy the text inside the text field.
    document.execCommand("copy");

    showNewPassword.innerHTML = yarpg.value;

    alertBox.classList.toggle('alert-box__hidden');

    setTimeout(function () {
        alertBox.classList.toggle('alert-box__hidden')
    }, 900);

}