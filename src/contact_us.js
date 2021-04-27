console.log("hello");
var form = document.getElementById('form');
var nameField = document.getElementById('first_lastName');
var phoneInput = document.getElementById('phoneNumber');
var textarea = document.getElementById('textarea');
var error = document.getElementById('error');
var name_error = document.getElementById('nameError');
var lastname_error = document.getElementById('lastNameError');
var message_error = document.getElementById('messageError');
var btn = document.getElementById('submit');

nameField.addEventListener('input', checkName);

function checkName(e) {
	nameFieldValue = e.target.value;
	console.log(nameFieldValue);

	var letters = /^[A-Za-z]+$/;
	if (nameFieldValue.match(letters)) {
		if (nameFieldValue.length > 0 && nameFieldValue.length <= 10) {
			nameField.style.border = '2px solid green';
		} else if (nameFieldValue.length > 10) {
			nameField.style.border = '2px solid red';
			name_error.textContent = 'Numele trebuie sa aiba cel putin 10 caractere';
		}
	} else {
		nameField.style.border = '2px solid red';
		name_error.textContent =
			'Numele trebuie sa contina doar litere';
	}
}

phoneInput.addEventListener('input', checkPhoneNo)

function checkPhoneNo(phoneInput) {
    var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneInput.value.match(phoneNo)) {
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

  textarea.addEventListener('input' , checkMessage);

  function checkMessage(e) {
      textareaValue = e.target.value;
      if (textareaValue.length > 20) {
          textarea.style.border = '2px solid green';
         } else if (textareaValue.length > 1000) {
          textarea.style.border = '2px solid red';
          messageError.textContent = 'Mesajul poate avea pana la 1000 de caractere';
         } else if (firstNameValue.length == "") {
           firstName.style.border = '2px solid red';
         } else {
            textarea.style.border = '2px solid red';
            messageError.textContent = 'Mesajul trebuie sa contina cel putin 20 de caractere';
         }
   
  }
  
  btn.addEventListener("click", submitForm);
  function submitForm(e){
    e.target = "checkName";
	e.target = "checkLastName";
	e.target = "checkMessage";
    if(nameField.value && phoneInput.value && textarea.value){
		confirmation.style.visibility = 'visible';
		confirmation.innerHTML += firstName.value;
	}
}