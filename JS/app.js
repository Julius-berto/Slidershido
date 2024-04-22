let nextDom = document.getElementById('next');
let previousDom = document.getElementById('previous');

let carruselDom = document.querySelector('.carrusel');
let SliderDom = carruselDom.querySelector('.carrusel .list');
let thumbnailsBorderDom = document.querySelector('.carrusel .thumbnails');
let thumbnailsItemDom = thumbnailsBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carrusel .time');

thumbnailsBorderDom.appendChild(thumbnailsItemDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');
}

previousDom.onclick = function(){
    showSlider('previous');
}
let runTimeOut;
let runNextAuto = setTimeOut(() => {
    nextDom.click();
},  timeAutoNext)
function showSlider(type){
    let SliderItemDom = SliderDom.querySelectorAll('.carrusel .list .item');
    let thumbnailsItemDom = document.querySelectorAll('.carrusel .thumbnails .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemDom[0]);
        thumbnailsBorderDom.appendChild(thumbnailsItemDom[0]);
        carruselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemDom[0]);
        thumbnailsBorderDom.prepend(thumbnailsItemDom[thumbnailsItemDom.length - 1]);
        carruselDom.classList.add('previous');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeOut(() => {
        carruselDom.classList.remove('next');
        carruselDom.classList.remove('previous');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}