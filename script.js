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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content"); 
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show'); }
      }  
     }
    }


function mOut(element) { 
  some_tag.style.color = red;
}


function mOver(some_tag){
  some_tag.style.color = blue 
}