// Dark Mode Button
let btnMode = document.getElementById("modeBtn");
btnMode.onclick = () => {
  document.body.classList.toggle("dark-mode");
  let navbar = document.querySelector('.navbar');
  if (document.body.classList.contains("dark-mode")) {
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    btnMode.innerHTML = "☀️";
  } else {
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    btnMode.innerHTML = "🌙";
  }
};

// Back To Top
let topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({top:0, behavior:'smooth'});
};

// Form Validation
function validateForm(){
 let name=document.getElementById('name').value;
 let email=document.getElementById('email').value;
 let message=document.getElementById('message').value;
 if(name==""||email==""||message==""){
  alert("Fill all fields");
  return false;
 }
}