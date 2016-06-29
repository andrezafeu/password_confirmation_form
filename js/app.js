var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();


function isPasswordValid() {
	return $password.val().length > 8;
}


function arePasswordsMatching() {
	return $confirmPassword.val() === $password.val();
}


function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}


function passwordEvent() {
	if (isPasswordValid()) {
		$password.next().hide();
	} else {
		$password.next().show();
	} 
}


function confirmPasswordEvent() {
	if (arePasswordsMatching()) {
		$confirmPassword.next().hide();
	} else {
		$confirmPassword.next().show();
	} 
}


function enableSubmitEvent() {
	// canSubmit is true so prop disabled would be true, therefore we need the ! in front of 
	// canSubmit to flick the values
	$("#submit").prop("disabled", !canSubmit());
}


$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// It needs to be executed when the page loads
enableSubmitEvent();