window.addEventListener('load', function() {
  var plength = prompt("How many of them thangs should i count you for?");

  while (plength < 8 || plength > 128) {
    plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }

  var upperCase = confirm("Is them uppercase letters you want?");
  var lowerCase = confirm("or would you like to use them lowercase letter's?");
  var myNumbers = confirm("dont ask to use numbers?");
  var mySymbols = confirm("them special characters you better use pattna?");

  while (!(upperCase || lowerCase || myNumbers || mySymbols)) {
    alert("Choose one character type!");

    upperCase = confirm("Is them uppercase letters you want?");
    lowerCase = confirm("or would you like to use them lowercase letter's?");
    myNumbers = confirm("dont ask to use numbers?");
    mySymbols = confirm("them special characters you better use pattna?");
  }

  //DOM elements
  const resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
    resultEl.value = generatePassword(lowerCase, upperCase, myNumbers, mySymbols, plength);
  });

  /*document.getElementById('clipboard').addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.value; 

    if (!password) {
      return;
    }

    /* textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
  }); */
});


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions
function getRandomLower() {
  return rando("qwertyuiopasdfghjklzxcvbnm")
}

function getRandomUpper() {
  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
  return rando(9);
}

function getRandomSymbol() {
  return rando('!@#$%^&*(){}[]=<>/,.');}