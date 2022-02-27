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
  



  clearErrors = () => {
    var errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

setError = (id, error) => {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

checkPassword = (password) => {
    var hasUpper = false;
    var hasLower = false;
    var hasNumber = false;
    var hasSpecial = false;
    let specials = `/[\`¬¦£!@#$%^&*()_+-=[]{};':"\\|,.<>¬?~]/`;
    let returnValue = "";

    for (let i = 0; i < password.length; i++) {
        if (password[i] == " ") {
            return false;
        }
        if (specials.match(password[i])) {
            hasSpecial = true;
            console.log("special");
        } else if (password[i].toLowerCase() === password[i] && isNaN(parseInt(password[i])) == true) {
            hasLower = true
            console.log("lower");
        } else if (password[i].toUpperCase() === password[i] && isNaN(parseInt(password[i])) == true) {
            hasUpper = true;
            console.log("upper");
        } else if (!isNaN(parseInt(password[i]))) {
            hasNumber = true;
            console.log("num");
        }
    }


    
    if (hasNumber == false) {
        returnValue += " **password must contain at least one number";
    }
     if (hasLower == false) {
        returnValue += " **password must contain at least one lower-case letter";
    } 
    if (hasUpper == false) {
        returnValue += " **password must contain at least one upper-case letter";
    }
     if (hasSpecial == false) {
        returnValue+= " **password must contain at least one special character";
    }
    if (hasLower == true && hasUpper == true && hasNumber == true && hasSpecial == true) {
        console.log("true");
        return true;
    } else {
        return returnValue;
    }

}

validateForm = () => {
    var returnVal = true;
    clearErrors();
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var number = document.forms["form"]["number"].value;
    var password = document.forms["form"]["password"].value;
    var confirmpassword = document.forms["form"]["confirmpassword"].value;


    if (name.length < 5) {
        setError("name", "**Name is too short");
        returnVal = false;
    }

    if (name.length == 0) {
        setError("name", "**Length of name cannot be zero")
        returnVal = false;
    }
    if (email.length > 15) {
        setError("email", "**Email must not be longer than 15 characters");
        returnVal = false;
    }
    if (number.length !== 11) {
        setError("number", "**incorrect number of digits");
        returnVal = false;
    }



    if (checkPassword(password) !== true) {
        setError("password", `${checkPassword(password)}`)
    }

    if (password !== confirmpassword) {
        setError("confirmpassword", "**Passwords do not match");
    }


    return returnVal;
}