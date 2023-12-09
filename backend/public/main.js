const togglePasswordVisibility = (inputElement, toggleElement) => {
	if(inputElement.type === "password") {
		inputElement.type = "text";
		toggleElement.innerHTML = '<i class="far fa-eye"></i>';
	}
	else {
		inputElement.type= "password";
		toggleElement.innerHTML = '<i class="far fa-eye-slash"></i>'; 
	}
}

const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const passwordConfirm = document.getElementById("passwordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");

togglePassword.addEventListener("click", () => {
	togglePasswordVisibility(passwordConfirm, togglePasswordConfirm);	
})








