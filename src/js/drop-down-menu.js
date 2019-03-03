
function toogleShowMenu() {
    let elem = document.getElementById('header-menu');
    let burgerButton = document.getElementById('burger-menu-btn');
    elem.style.display = 'none'
    
    burgerButton.addEventListener('click', () => {
        if(elem.style.display == 'none') {
            elem.style.display = 'flex';
        } else {
            elem.style.display = 'none';
        }
    });
}

toogleShowMenu();