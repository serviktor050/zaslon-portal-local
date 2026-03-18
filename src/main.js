import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './style.scss'

console.log('Главная страница');

const swiper = new Swiper('.reviews__body', {
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 7,
    slideToClickedSlide: true,
    spaceBetween: 20, // небольшой отступ между слайдами

    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
});