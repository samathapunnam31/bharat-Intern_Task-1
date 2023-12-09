function validateForm() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('mail').value;
	var password = document.getElementById('password').value;
	var passwordConfirm = document.getElementById('passwordConfirm').value;

	if (fname === "" || lname === "") {
      	alert("Name can't be blank");
      	return false;
    	}

	else if (isNaN(phone) || phone.length !== 10) {
      	alert("Enter a valid 10-digit phone number");
      	return false;
   	}

	else if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length) {
      	alert("Please enter a valid email address");
        	return false;
    	}

	else if (password.length < 6) {
      	alert("Password must be at least 6 characters long.");
      	return false;
    	}
	else if (password !== passwordConfirm) {
      	alert('Passwords do not match');
        	return false;
    	}
	else {
		return true;
		alert("Login successful!");
	  	window.location.href = 'index.html';
	}
}
