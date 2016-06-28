$("form span").hide();

$("#password").focus(function(){
	if ($(this).val().length > 8) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	} 
});

$("#confirm_password").focus(function(){
	if ($(this).val() == $("#password").val()) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	} 
});