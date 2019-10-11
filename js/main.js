// language change pop-up
const dropDowns = document.querySelectorAll('.nav-changeLanguage');
const dropDown = document.querySelector('.nav-changeLanguage');
const item     = document.querySelector('.dropdown-menu');

function myFunction() {
  item.classList.toggle("show");
}
dropDown.onclick = myFunction;

window.onclick = function(event) {
  if (!event.target.matches('.nav-changeLanguage')) {
    item.classList.remove('show');
  }
}


// expand animation 
$(".collabse-btn").click(function () {
  $(".header-table").toggleClass("header-table_active").focus;
  $(this).toggleClass("collapsed");
});