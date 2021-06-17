const alertBox = document.getElementById('alert-box');
const yarpg = document.getElementById('yarpg');


const digits = '0123456789';

const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ascii_letters = ascii_lowercase + ascii_uppercase;
const punctuation = '!\"#$ %&\'()*+,-./:;<=>?@[\]^_`{|}~';
const printable = digits + ascii_letters + punctuation;


function getPassword(passwordLength, characters) {
    let password = '';

    for (var cont = 0; cont < passwordLength; cont++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }

    console.log(password);

    return password;
}


function passwordGenerator(passwordLength, allPrintable = true, onlyNumbers = false, onlyLetters = false, onlyPunctuation = false) {

    yarpg.value = getPassword(16, printable);

}