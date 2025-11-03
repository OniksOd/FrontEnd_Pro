const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = {};

  formData.forEach((value, key) => (formObj[key] = value));
  validateValue(event);
  console.log(formObj);
});

const userName = document.getElementById("exampleFormControlInput1");
const userMessage = document.getElementById("exampleFormControlTextarea1");
const userPhone = document.getElementById("exampleFormControlInput2");
const userEmail = document.getElementById("exampleFormControlInput3");

const validateValue = (event) => {
  checkValue(userName.value, /[A-Za-z]/, userName);
  checkValue(userMessage.value, /[A-Za-zА-Яа-я]{3,}/, userMessage);
  checkValue(userPhone.value, /^\+380\d{9}$/, userPhone);
  checkValue(
    userEmail.value,
    /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/,
    userEmail
  );
};

const checkValue = (value, regex, element) => {
  const isValid = regex.test(value);
  const errorMessage = element.nextElementSibling;
  if (!isValid) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
};
