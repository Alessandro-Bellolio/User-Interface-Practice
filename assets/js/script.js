/* Booleans for evaluating certain conditions. */

let isSelected = false;
let isSent = false;
let isOp1 = false,
	isOp2 = false,
	isOp3 = false,
	isOp4 = false;

/* Objects to store images information. */

let noSelected = {
	src: 'assets/img/no_selected.png',
	alt: 'no_selected_face'
};
let selected = {
	src: 'assets/img/selected.png',
	alt: 'selected_face'
};
let noSelectedDisabled = {
	src: 'assets/img/no_selected_disabled.png',
	alt: 'no_selected_disabled_face'
};
let SelectedDisabled = {
	src: 'assets/img/selected_disabled.png',
	alt: 'selected_disabled_face'
};

/* Click listener to style the buttons accordingly. */

$('.elem_button').click(function() {
	if (!isSent) {
		$('.elem_button').removeClass('button_selected');
		$(this).addClass('button_selected');
		$('img').attr(noSelected);
		$(this).find('img').attr(selected);
		$('#button_continue').addClass('button_continue_active');
		isSelected = true; //This makes the continue button active.
	}
});

/* Click listeners to each button to determine which one is selected. */

$('#button_HTML').click(function() {
	isOp1 = true;
	isOp2 = false;
	isOp3 = false;
	isOp4 = false;
});

$('#button_CSS').click(function() {
	isOp1 = false;
	isOp2 = true;
	isOp3 = false;
	isOp4 = false;
});

$('#button_JavaScript').click(function() {
	isOp1 = false;
	isOp2 = false;
	isOp3 = true;
	isOp4 = false;
});

$('#button_Frontend').click(function() {
	isOp1 = false;
	isOp2 = false;
	isOp3 = false;
	isOp4 = true;
});

/* Click listener to the continue button for styling and functioning purposes. */

$('#button_continue').click(function() {
	if (isSelected) {
		$(this).removeClass('button_continue_active');
		$(this).addClass('button_continue_sent');
		$('img').attr(noSelectedDisabled);
		$('.elem_button').removeClass('elem_button_active');

		/* Evaluationg which button is selected to change the correct img. */
		if (isOp1) {
			$('#button_HTML img').attr(SelectedDisabled);
		}

		if (isOp2) {
			$('#button_CSS img').attr(SelectedDisabled);
		}

		if (isOp3) {
			$('#button_JavaScript img').attr(SelectedDisabled);
		}

		if (isOp4) {
			$('#button_Frontend img').attr(SelectedDisabled);
		}

		isSent = true; //This makes the interface disabled.
	}
});
