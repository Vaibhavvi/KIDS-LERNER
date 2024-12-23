// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let loginButton=document.querySelector("#nav-button");

function clickLogin(){
   onclick="window.open('http://127.0.0.1:5501/Login.html')";
   loginButton("clickLogin")
}


/*------------------------------------NavBar---------------------------------------------------*/
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

/*----------------------------------------Background-----------------------------------*/