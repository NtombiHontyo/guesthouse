function toggleMenu() {
    document.getElementById('menu-small').classList.toggle('open');
    document.getElementById('menu-items').classList.toggle('open');
}
const x = document.getElementById('menu-small');
x.onclick = toggleMenu