var firstName = document.querySelector("#first-name-input")
var lastName = document.querySelector("#last-name-input")
var eMail =  document.querySelector("#email-input")
var country = document.querySelector("#selector1")
var bioGraphy = document.querySelector("#textArea1")
var buttonSelector = document.querySelector("#button")

buttonSelector.addEventListener("click", function() {
  console.log("The first name is: " + firstName.value);
  console.log("The last name is: " + lastName.value);
  console.log("The email is: " + eMail.value);
  console.log("The country is: " + country.value);
  console.log("Biography: " + bioGraphy.value);
  firstName.value="";
  lastName.value="";
  eMail.value="";
  country.value="";
  bioGraphy.value="";
});
