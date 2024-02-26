function promptForName() {
    var name = prompt("Please enter your name here :");
    if (name !== null && name !== "") {
        document.getElementById("username :").innerText = "Hello " + name + ", Welcome to my website !";
    }
}
window.onload = function() {
    var img = document.getElementById("enlargeableImage");
    img.addEventListener("click", function() {
        enlargeImage(this);
    });
}

function enlargeImage(img) {
    img.style.width = (parseInt(img.style.width) || img.width) * 1.5 + "px";
}
