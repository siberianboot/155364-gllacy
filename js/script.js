var feedbackBtn = document.querySelector('.address_btn');
var feedbackMenu = document.querySelector('.feedback_block');
var feedbackClose = document.querySelector('.feedback_close');
feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackMenu.classList.add('js_show_selector');
});
feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackMenu.classList.remove('js_show_selector');
});
