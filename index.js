let box = $(".container div");
let currentPlayer = "X";
let isToggled = false;

$(box).one("click", function () {
	isToggled = !isToggled;
	if (isToggled == false) {
		if ($(this).text().length == 0) {
			currentPlayer = "O";
			$(this).text(currentPlayer);
		} else {
			$(this).text("O");
		}
	} else if (isToggled == true) {
		if ($(this).text().length == 0) {
			currentPlayer = "X";
			$(this).text(currentPlayer);
		} else {
			$(this).text("X");
		}
	}
});
