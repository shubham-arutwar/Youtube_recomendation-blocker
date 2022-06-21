var parent = document.getElementsByTagName("ytd-item-section-renderer")[1].getElementsByTagName("Div")[8];
var child = parent.getElementsByTagName("ytd-compact-video-renderer")[0];
parent.removeChild(child);

---

var parent = document.getElementsByTagName("ytd-item-section-renderer")[1];
var child = parentgetElementsByTagName("Div")[8];
parent.removeChild(child);

---

var parent = document.getElementsByTagName("ytd-item-section-renderer")[1];
var child = parentgetElementsByTagName("Div")[8];
parent.removeChild(child);

---

var parent = document.getElementById("secondary");
parent.removeChild(parent.firstChild);

---

var parent = document.getElementById("columns");
parent.removeChild(secondary);

---

var sugParent = document.getElementById("columns");
var sug = sugParent.removeChild(secondary);

parent.appendChild(sec);

---

var sugParent = document.getElementById("columns");
var sug = sugParent.removeChild(secondary);

var navParent = document.getElementById("buttons");
var navChild = navParent.getElementsByTagName("ytd-topbar-menu-button-renderer")[0,1];
var nav = navParent.removeChild(navChild);

sugParent.appendChild(sug);
navParent.appendChild(nav);

---

var button = document.getElementById("toggle");

button.onclick = function(){
    
    var sugParent = document.getElementById("columns");
    var sug = sugParent.removeChild(secondary);

    var navParent = document.getElementById("buttons");
    var navChild = navParent.getElementsByTagName("ytd-topbar-menu-button-renderer")[0,1];
    var nav = navParent.removeChild(navChild);
}