
let slides = [...document.getElementsByClassName('carousel__items')];// создаем массив слайдеров, без [... ] будет псевдомасив;
let counter = 0;

function slider(){
     for (let i = 0; i<slides.length; i++){
        slides[i].classList.add('hide');
    }
    slides[counter].classList.remove('hide');
}
slider();
// При клике на слайд будет работать как Button_Right
document.querySelector('.here-is-what-you-get__carousel').onclick = function(){
    if (counter + 1 == slides.length){
        counter = 0;
     } 
     else{
        counter++;
    }
    slider();
}

// Button_Right
document.querySelector('.here-is-what-you-get__arrov-left').onclick = function(){
        if (counter + 1 == slides.length){
            counter = 0;
         } 
         else{
            counter++;
        }
        slider();
}
// Button_LEFT
document.querySelector('.here-is-what-you-get__arrov-right').onclick = function(){
            if (counter - 1 == -1){
                counter = slides.length - 1;
            }
            else{
                counter--;
            }
            slider();      
}
