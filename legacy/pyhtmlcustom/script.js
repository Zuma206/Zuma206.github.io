function gencss() {
	var css = `
#zTitleBar {
background-color: --foreground-color--;
top: 0px;
left: 0px;
right: 0px;
position: absolute;
white-space: nowrap;
overflow-x: auto;
}

.zHeading {
	font-size: 20px;
	color: --text-color--;
	font-family: "SF Pro";
}

.zTitleButton {
	border-radius: 100%;
	padding: 12px 12px;
	background-color: --foreground-color-2--;
	border: 4px solid ;
	margin-left: 5px;
}

#red{
	border-color: --close-color--;
}

#orange{
	border-color: --max-color--;
}

#orange:hover {
	background-color: --max-color-2--;
}

#red:hover {
	background-color: --close-color-2--;
}

#zTitle {
	margin-left: 5px;
}

#zBody {
	background-color: --background-color--;
	margin-top: 60px;
	white-space: nowrap;
	overflow-x: auto;
}

#zwBody {
	background-color: --background-color-2--;
	white-space: nowrap;
	overflow-x: auto;
}

* {cursor: url(--cursor-url--), auto !important;}

.zInput {
	cursor: url(https://cur.cursors-4u.net/cursors/cur-4/cur332.cur), auto !important;
	color: --text-color-2--;
	background-color: --button-4--;
	border-style: dotted;
	border-color: black;
}

.zTop {
	margin-top: 65px;
}

.zButton-small {
	background-color: --button-1--;
	color: --text-color-3--;
	font-family: "SF Pro";
	border: none;
	padding: 8px 13px;
	position: relative;
	border-radius: 10%;
}

.zButton-small:hover {
	background-color: --button-color-1--;
}

.zButton-small:active {
	background-color: --background-color-3--;
}

.zButton-med {
	background-color: --button-2--;
	color: --text-color-4--;
	font-family: "SF Pro";
	border: none;
	padding: 10px 15px;	
	font-size: 20px;
	position: relative;
	border-radius: 10%;
}

.zButton-med:hover {
	background-color: --button-color-2--;
	background-image: none;
}

.zButton-med:active {
	background-image: none;
	background-color: --background-color-4--;
}

.zButton-large {
	background-color: --button-3--;
	color: --text-color-5--;
	border: none;
	padding: 10px 15px;	
	font-size: 30px;
	position: relative;
	border-radius: 10%;
}

.zButton-large:hover {
	background-color: --button-color-3--;
	background-image: none;
}

.zButton-large:active {
	background-image: none;
	background-color: --background-color-5--;
}

.zPanel-left {
	margin-right: 10px;
	display: inline-table;
	background-color: --foreground-color-3--;
	padding: 10px 10px;
}

.zPanel-right {
	margin-left: 10px;
	float: right;
	display: inline-table;
	background-color: --foreground-color-4--;
	padding: 10px 10px;
}

.zPanel-top {
	margin-bottom: 10px;
	float: top;
	display: inline-table;
	background-color: --foreground-color-5--;
	padding: 10px 10px;
}

@font-face {
  font-family: "SF Pro";
  src: url("SFProDisplay-Light.ttf") format("truetype");
}`;
	var textcolor = document.getElementById("i1").value;
	var cursorurl = document.getElementById("i2").value;
	var backgroundcolor = document.getElementById("i3").value;
	var foregroundcolor = document.getElementById("i4").value;
	var buttoncolor = document.getElementById("i5").value;
	var closecolor = document.getElementById("i6").value;
	var maxcolor = document.getElementById("i7").value;
	var buttoncolor2 = document.getElementById("i8").value;
	//--------------------------------------------------------
	var css = css.replace("--text-color--", textcolor);
	var css = css.replace("--text-color-2--", textcolor);
	var css = css.replace("--text-color-3--", textcolor);
	var css = css.replace("--text-color-4--", textcolor);
	var css = css.replace("--text-color-5--", textcolor);
	var css = css.replace("--cursor-url--", cursorurl);
	var css = css.replace("--foreground-color--", foregroundcolor);
	var css = css.replace("--foreground-color-2--", foregroundcolor);
	var css = css.replace("--foreground-color-3--", foregroundcolor);
	var css = css.replace("--foreground-color-4--", foregroundcolor);
	var css = css.replace("--foreground-color-5--", foregroundcolor);
	var css = css.replace("--background-color--", backgroundcolor);
	var css = css.replace("--background-color-2--", backgroundcolor);
	var css = css.replace("--background-color-3--", backgroundcolor);
	var css = css.replace("--background-color-4--", backgroundcolor);
	var css = css.replace("--background-color-5--", backgroundcolor);
	var css = css.replace("--max-color--", maxcolor);
	var css = css.replace("--max-color-2--", maxcolor);
	var css = css.replace("--close-color--", closecolor);
	var css = css.replace("--close-color-2--", closecolor);
	var css = css.replace("--foreground-color-6--", foregroundcolor);
	var css = css.replace("--button-1--", buttoncolor);
	var css = css.replace("--button-2--", buttoncolor);
	var css = css.replace("--button-3--", buttoncolor);
	var css = css.replace("--button-4--", buttoncolor);
	var css = css.replace("--button-color-1--", buttoncolor2);
	var css = css.replace("--button-color-2--", buttoncolor2);
	var css = css.replace("--button-color-3--", buttoncolor2);
	document.getElementById('css-text').innerText = css;
}
