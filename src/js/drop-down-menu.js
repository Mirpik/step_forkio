
function toogleShowMenu() {
    let elem = document.getElementById('header-menu');
    let burgerButton = document.getElementById('burger-menu-btn');
    console.log(window.screen.width);
    
    if(window.screen.width < 480) {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'flex';
    }
    
    burgerButton.addEventListener('click', () => {
        if(elem.style.display == 'none') {
            elem.style.display = 'flex';
        } else {
            elem.style.display = 'none';
        }
    });
}

toogleShowMenu();