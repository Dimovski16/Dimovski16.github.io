function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("username").innerText = "Hello, " + name + "!";
    }
}
function enlargeImage() {
    var img = document.getElementById("myImage");
    img.style.width = (parseInt(img.style.width) || img.width) * 2 + "px";
}
document.getElementById("menu-item-1").addEventListener("click", function() {
    window.location.href = "page1.html";
});

document.getElementById("menu-item-2").addEventListener("click", function() {
    window.location.href = "page2.html";
});

var navItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightgray";
    });
    navItems[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent";
    });
}