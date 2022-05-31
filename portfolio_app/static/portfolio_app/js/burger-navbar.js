function showClosedOrHideOpenedMenu() {
   menuElement.classList.toggle('show-menu');
}

const burgerIcon = document.querySelector('.burger');
const menuElement = document.querySelector('.buttons');

burgerIcon.addEventListener('click', function() {
   showClosedOrHideOpenedMenu();
});

const navButtonsElements = menuElement.querySelector('.nav-buttons');

navButtonsElements.addEventListener('click', function() {
   showClosedOrHideOpenedMenu();
});
