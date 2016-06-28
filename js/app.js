var $password = $("#password")
var $confirmPassword = $("#confirm_password")

$("form span").hide();

function passwordEvent() {
	if ($password.val().length > 8) {
		$password.next().hide();
	} else {
		$password.next().show();
	} 
}

function confirmPasswordEvent() {
	if ($confirmPassword.val() === $("#password").val()) {
		$confirmPassword.next().hide();
	} else {
		$confirmPassword.next().show();
	} 
}

$password.focus(passwordEvent);

$confirmPassword.focus(confirmPasswordEvent);