let box = $(".container div");
let currentPlayer = "X";
let isToggled = false;

$(box).click(function () {
	isToggled = !isToggled;
	if (isToggled == false) {
		currentPlayer = "O";
		$(this).text(currentPlayer);
	} else if (isToggled == true) {
		currentPlayer = "X";
		$(this).text(currentPlayer);
	}
});

function noEdit() {}
