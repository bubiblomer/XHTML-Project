/* 
	GENERAL JAVASCRIPT
	www.maal4.nl
	by bubi blomer
	ver 0.1 | 20/08/2009
*/

$(document).ready(function() {

	/* !form validation defaults */
	jQuery.validator.setDefaults({
		errorPlacement: function(error, element){
			element.parent().append(error)
		},
		errorElement: "span",
		errorClass: "ui-state-error",
		rules: {
			sName: 'required',
			sFirstname: 'required',
			sLastname: 'required',
			sEmail: 'required email',
			sUsername: 'required',
			sPassword: 'required',
			sConfirmNewPassword: {
				equalTo: "#sNewPassword"
			}
		},
		messages: {}
	});
	
	/*
	* Translated default messages for the jQuery validation plugin.
	* By Joost Baaij http://www.spacebabies.nl/ joost@spacebabies.nl
	* Language: NL
	* Skipped date/dateISO/number.
	*/
	
	/* !dutch validation messages translation */
	jQuery.extend(jQuery.validator.messages, {
		required: "Dit veld is verplicht.",
		maxlength: jQuery.format("U kunt niet meer dan {0} karakters invoeren."),
		minlength: jQuery.format("U dient minimaal {0} karakters in te voeren."),
		rangelength: jQuery.format("U dient minimaal {0} en maximaal {1} karakters in te voeren."),
		email: "Een geldig emailadres is verplicht.",
		url: "Een geldig URL is verplicht.",
		date: "Een geldige datum is verplicht.",
		number: "Een geldig getal is verplicht.",
		digits: "Gebruik alleen cijfers.",
		equalTo: "Herhaal de invoer nogmaals.",
		range: jQuery.format("U dient een waarde tussen {0} en {1} in te voeren."),
		max: jQuery.format("U dient een waarde kleiner dan of gelijk aan {0} in te voeren."),
		min: jQuery.format("U dient een waarde groter dan of gelijk aan {0} in te voeren."),
		creditcard: "Een geldig creditcardnummer is verplicht."
	});
	
	// !run form validation
	$('form.validate').validate();

});