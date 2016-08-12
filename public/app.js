'use strict'

$('#signup-link').on('click', function(){
	$('#signup-box').toggle();
	$('#login-box').hide();
});

$('#login-link').on('click', function(){
	$('#login-box').toggle();
	$('#signup-box').hide();
});