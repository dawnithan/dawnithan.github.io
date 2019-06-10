$(document).ready(function() {
	$('#contact_button').click(function() {
		window.location.href = "mailto:niall.brennan.2016@mumail.ie";
	});

	$('#github').click(function() {
		$('<a href="https://github.com/dawnithan" target="blank"></a>')[0].click(); 
	});

	$('#linkedin').click(function() {
		$('<a href="https://www.linkedin.com/in/niall-brennan-718019150/" target="blank"></a>')[0].click();
	});
});
