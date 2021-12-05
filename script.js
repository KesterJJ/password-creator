longerThanFive = (text) => {
    if (text.length > 5) {
      return true;
    } else {
      return false;
    }
  }
  
  hasUpperAndLowerCase = (text) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    for (let i = 0; i < text.length; i++){
      if (isNaN(text[i]) == false) {
  
      } else if (text[i] == text[i].toUpperCase()) {
      hasUpperCase = true;
    } else if (text[i] == text[i].toLowerCase()) {
      hasLowerCase = true;
    }
  }
  if (hasUpperCase == true && hasLowerCase == true) {
    return true;
  } else {
    return false;
  }
  }
  
  
  hasTwoNumbers = (text) => {
    let numbers = 0;
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < digits.length; j++) {
        if (digits[j] == text[i]) {
          numbers++;
        }
      }
    }
    if (numbers >= 2) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(longerThanFive('fdsafsdfdd'));
  console.log(longerThanFive('fds'));
  console.log(hasUpperAndLowerCase("hello"));
  console.log(hasUpperAndLowerCase("Hello"));
  console.log(hasUpperAndLowerCase("HELLO"));
  console.log(hasTwoNumbers('1'));
  console.log(hasTwoNumbers('12'));
  console.log(hasTwoNumbers('nonumbers'));
  console.log(hasTwoNumbers('1number'));
  console.log(hasTwoNumbers('2numbers2'));
  
  
  
  function submit() {
  let user = document.getElementById("text").value;
  let message = document.getElementById("message");
   message.innerHTML = "";
  if (longerThanFive(user) && hasUpperAndLowerCase(user) && hasTwoNumbers(user)) {
    message.innerHTML = "Success!";
    return true;
  } else {
    if (longerThanFive(user) !== true) {
      message.innerHTML = "*Password requires more than 5 characters. ";
    }
    if (hasUpperAndLowerCase(user) !== true) {
      message.innerHTML += " *Password must have both upper case and lower case letters. ";
    }
    if (hasTwoNumbers(user) !== true) {
      message.innerHTML += " *Password must have at least two numbers.";
    }
    return false;
  }
  }
  