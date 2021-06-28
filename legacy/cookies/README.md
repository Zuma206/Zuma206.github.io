# pyHTML (oop) Code:
import pyHTMLoop as html<br>
html.init("index.html")<br>
html.header("Cookies", "https://zuma206.github.io/").write()<br>
title = html.text("Type anything in, and save and load it from your cookies").get()<br>
userinput = html.inputBox("text", "textinput", "Cookie are cool").get()<br>
savebutton = html.button("Save", "savefunc()", 2).get()<br>
loadbutton = html.button("Load", "loadfunc()", 2).get()<br>
panelitems = [title, userinput, savebutton, loadbutton]<br>
html.panel(panelitems, "left", "vertical").write()<br>
html.loadScript("script.js")<br>
html.fin()<br>

# OLD pyHTML (non-oop) Code:
import pyHTML as html<br>
e = "index.html"<br>
header = html.newHeader("Cookies", "https://zuma206.github.io/")<br>
title = html.newText("Type anything in, and save and load it from your cookies")<br>
userinput = html.newInput("text", "textinput", "Cookie are cool")<br>
savebutton = html.newButton("Save", "savefunc()", 2)<br>
loadbutton = html.newButton("Load", "loadfunc()", 2)<br>
panelitems = [title, userinput, savebutton, loadbutton]<br>
panel = html.newPanel(panelitems, "left", "vertical")<br>
#draw section<br>
html.start(e)<br>
html.draw(e, header)<br>
html.draw(e, panel)<br>
html.loadScript(e, "script.js")<br>
html.end(e)<br>
