var navBtn = document.getElementById('nav-burger');
var sideNav = document.getElementById('sidenav');
var closeBtn = document.getElementById('closebtn');
var overlay = document.getElementById('overlay');

navBtn.addEventListener('click', () => {
    sideNav.style.width = '70%';
    overlay.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sideNav.style.width = "0";
    hideOverlay();
});

function hideOverlay() {
    overlay.style.display = 'none';
    sideNav.style.width = "0";
}