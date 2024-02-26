function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("username").innerText = "Hello, " + name + "!";
    }
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    // Change the width of the image to enlarge it
    img.style.width = (parseInt(img.style.width) || img.width) * 2 + "px";
}
