var catalogButton = document.querySelector('.main_navigation_catalog');
var catalogPopup = document.querySelector('.catalog_menu');
catalogButton.addEventListener("click", function(event) {
  event.preventDefault();
  catalogPopup.classList.add('js_show_selector');
});
