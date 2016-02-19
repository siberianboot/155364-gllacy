var catalogButton = document.querySelector('.main_navigation_catalog');
var catalogPopup = document.querySelector('.sub_catalog_menu');
catalogButton.addEventListener("click", function(event) {
  event.preventDefault();
  catalogPopup.classList.toggle('js_show_selector');
});
