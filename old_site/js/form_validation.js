/*
 * 	Contact Form Validation v1.0
 *	By Simon Bouchard <www.simonbouchard.com>
 *	You need at least PHP v5.2.x with JSON support for the live validation to work.
 */

function submitForm() {  

	$('#contactForm').submit(function() {

		// Disable the submit button
		$('#contactForm input[type=submit]')
			.attr('value', 'Sending message')
			.attr('disabled', 'disabled');

		// AJAX POST request
		$.post(
			$(this).attr('action'),
			{
				name:$('#name').val(),
				email:$('#email').val(),
				message:$('#message').val()
			},
			function(errors) {
				// No errors
				if (errors == null) {
					$('#contactForm').hide().html('<h3>Thank you.</h3><p>Your message has been sent.</p>').show();
					Cufon.replace('#menu a, h1, h2, h3, h4, h5, h6');
					
					$('.alert').removeClass('alert');
				}

				// Errors
				else {
					// Re-enable the submit button
					$('#contactForm input[type=submit]')
						.removeAttr('disabled')
						.attr('value', 'Submit');

					// Technical server problem, the email could not be sent
					if (errors.server != null) {
						$('.alert').removeClass('alert');
						alert(errors.server);
						return false;
					}

					// Empty the errorbox and reset the error alerts
					$('.alert').removeClass('alert');

					// Loop over the errors, mark the corresponding input fields,
					// and add the error messages to the errorbox.
					for (field in errors) {
						if (errors[field] != null) {
							$('#' + field).addClass('alert');
						}
					}
				}
			},
			'json'
		);

		// Prevent non-AJAX form submission
		return false;
	});

}