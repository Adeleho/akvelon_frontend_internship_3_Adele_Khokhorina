let images = [
    "http://pvbk.spb.ru/inc/slider/imgs/planet0.jpg",
    "http://pvbk.spb.ru/inc/slider/imgs/planet1.jpg",
    "http://pvbk.spb.ru/inc/slider/imgs/planet2.jpg",
    "http://pvbk.spb.ru/inc/slider/imgs/planet3.jpg",
    "http://pvbk.spb.ru/inc/slider/imgs/planet4.jpg",
    "http://pvbk.spb.ru/inc/slider/imgs/planet5.jpg",
];

let num = 0;
let slider = document.getElementById('slider');
let buttonNext = document.getElementById('next');
let buttonPrev = document.getElementById('prev');

buttonNext.disabled = false;
buttonPrev.disabled = true;

const next = () => {
    buttonPrev.disabled = false;
    num++;
    buttonNext.disabled = num >= images.length-1;
    slider.src = images[num];
};

const prev = () => {
    buttonNext.disabled = false;
    num--;
    buttonPrev.disabled = num <= 0;
    slider.src = images[num];
};
