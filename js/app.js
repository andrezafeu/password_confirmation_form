var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

$("form span").hide();


function isUsernamePresent() {
	return $username.val().length > 2;
}


function isPasswordValid() {
	return $password.val().length > 8;
}


function arePasswordsMatching() {
	return $confirmPassword.val() === $password.val();
}


function canSubmit() {
	return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}


function usernameEvent() {
	if (isUsernamePresent()) {
		$username.next().hide();
	} else {
		$username.next().show();
	}
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

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

// It needs to be executed when the page loads
enableSubmitEvent();