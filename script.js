function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("username").innerText = "Hello, " + name + "!";
    }
}
