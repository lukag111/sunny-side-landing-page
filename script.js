
const menu = document.querySelector(".menu-mobile");
const toggleBtn = document.querySelector(".btn-menu");
const navItems = document.querySelector(".nav-items-mobile");

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', function() {
    // If the menu is hidden, show it, otherwise hide it
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        navItems.style.display = 'flex'
    } else {
        menu.style.display = 'none';
        navItems.style.display = 'none'
    }
});
