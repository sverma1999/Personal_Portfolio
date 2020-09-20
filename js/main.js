//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");


// Set Initials State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}

//Tabs
for (let tl of tabLinks) {
    tl.addEventListener('click', e => {
        e.preventDefault();

        const activeTab = document.querySelector('.tabs li.active');
        const activePanel = document.querySelector('.tabs-panel.active');

        activeTab.classList.remove('active');
        activePanel.classList.remove('active');

        const parentListItem = tl.parentElement;
        console.log(parentListItem);
        parentListItem.classList.add('active');
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(tl => tl.getAttribute('data-index') == index);
        panel[0].classList.add('active');
    });
}