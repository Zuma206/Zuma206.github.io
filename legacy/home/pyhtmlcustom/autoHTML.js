var fullscreenYN = false;
function goFullscreen() {
	if (!fullscreenYN) {
		e = document.documentElement;
		e.requestFullscreen();
		var fullscreenYN = true;
	}
	if (fullscreenYN) {
		document.exitFullscreen();
		var fullscreenYN = false;
	}
}
function closebutton() {
	window.history.back();
}
