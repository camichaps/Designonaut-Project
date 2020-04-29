let menuButton =
document.getElementById('hamburger-menu');

let menu =
document.getElementsByClassName('menu-container');

function menuOpen() {
    if (menu.style.menu.visibility === hidden) {
        menu.style.visibility = visible;
    } else {
        menu.style.visibility = hidden;
    }
}

menuButton.onclick() = menuOpen()