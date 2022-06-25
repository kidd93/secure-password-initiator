// Const variables for uppercase, lowercase, special characters etc. 
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const special = "~!@#$%^&*()_-+=[]{}|;:?<>";
const numbers = '0123456789';
let temp = '';
let password = '';
// addEventListener that listens for when the generate button is clicked.
document.getElementById('generate').addEventListener('click', handleClick);
// handleClick function with if statements and for loop.
function handleClick() {
    let length = prompt('Provide character length between 8-128');
    if (length < 8 || length > 128) return handleClick();

    let isUpper = confirm('Would you like uppercase letters in password?');
    let isLower = confirm('Would you like lowercase letters in password?');
    let isSpecial = confirm('Would you like special characters in password?');
    let isNumbers = confirm('Would you like numbers in password?');

    if(isUpper) temp += alpha;
    if(isLower) temp += alpha.toLowerCase();
    if(isSpecial) temp += special;
    if(isNumbers) temp += numbers;

    for (let i = 0; i < length; i++) {
        password += temp[Math.floor(Math.random()*temp.length)]
    };

    document.getElementById('password').innerText = password;    
};
