const toggleBtn =  document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const linkIcons = document.querySelector('.navbar_linkIcons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    linkIcons.classList.toggle('active');
});