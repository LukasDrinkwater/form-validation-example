const errorElement = document.getElementById("error");
const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const formFieldArray = [email, country, postcode, password, confirmPassword];

formFieldArray.forEach((field) =>
  field.addEventListener("blur", formValidation())
);

formFieldArray.forEach((field) =>
  field.addEventListener("blur", (e) => {
    let messages = formValidation();
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  })
);

form.addEventListener("submit", (e) => {
  let messages = formValidation();
  //   let messages = formValidation();
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

function formValidation() {
  let messages = [];
  let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let regPostcode =
    /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/;

  // check email validation
  if (regEmail.test(email.value) === false) {
    messages.push("Please check the email");
  }

  //   if (regPostcode.test(postcode.value) === false) {
  //     messages.push("Please check the postcode");
  //   }

  //check postcode validation
  if (
    regPostcode.test(
      postcode.value === undefined || postcode.value.toUpperCase()
    ) === false
  ) {
    messages.push("Please check the postcode");
  }

  //check password validation
  if (
    regPassword.test(password.value === undefined || password.value) === false
  ) {
    messages.push("Password must contain a number and special character");
  }

  if (password.value.length <= 6 || password.value.length >= 20) {
    messages.push("Password needs to be between 6 and 20 characters");
  }

  if (password.value != confirmPassword) {
    messages.push("Passwords do not match");
  }

  return messages;
}
