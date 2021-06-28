function savefunc() {
	text = document.getElementById('uinput').value;
	document.cookie = text;
	document.getElementById('uinput').value = "";
}

function loadfunc() {
	document.getElementById('uinput').value = document.cookie;
}
