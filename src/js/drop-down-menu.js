let elem = document.getElementById('header-menu');
let burgerButton = document.getElementById('burger-menu-btn');
function menuHiding() {
    console.log(window.screen.width);

    if (window.screen.width < 480) {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'flex';
    }

    // burgerButton.addEventListener('mouseenter', () => {
    //     if(elem.style.display == 'none') {
    //         elem.style.display = 'flex';
    //     } else {
    //         elem.style.display = 'none';
    //     }
    // });
}

function toogleShowMenu() {
    if(elem.style.display == 'none') {
                elem.style.display = 'flex';
            } else {
                elem.style.display = 'none';
            }
}

burgerButton.addEventListener('mouseenter', toogleShowMenu);
burgerButton.addEventListener('mouseleave', toogleShowMenu);

menuHiding();