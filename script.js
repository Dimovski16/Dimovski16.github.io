  function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
      document.getElementById("username").innerHTML = "Hello, " + name + "! Welcome to my homepage.";
    } else {
      document.getElementById("username").innerHTML = "You didn't enter your name.";
    }
  }
  

  function enlargeImage() {
    var image = document.getElementById("AD16");
    if (image.style.width === "200px") {
      image.style.width = "400px"; 
    } else {
      image.style.width = "200px";
    }
  }