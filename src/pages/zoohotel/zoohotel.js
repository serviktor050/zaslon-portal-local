import 'swiper/css';
import './style.css'
import Swiper from 'swiper';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { resizeWidth } from './resize.js'

const galleryAll = document.querySelectorAll('.reviews-gallery')

if (galleryAll.length) {
    function initSliders() {
        galleryAll.forEach((gallery) => {
            const sliderEl = gallery.querySelector('.reviews-gallery-swiper')

            if (sliderEl.swiper) {
                sliderEl.swiper.destroy()
            }

            const slides = sliderEl.querySelectorAll('.swiper-slide')

            if (slides.length === 1) {
                sliderEl.classList.add('_hide-effect')
            }

            const config = {
                slidesPerView: slides.length === 1 ? 1 : 1.33334,
                spaceBetween: 8,
                watchOverflow: true,
                modules: [EffectCreative, Navigation, Pagination],
                grabCursor: true,
                breakpoints: {
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
                navigation: {
                    nextEl: gallery.querySelector('.reviews-gallery__next-btn'),
                    prevEl: gallery.querySelector('.reviews-gallery__prev-btn'),
                },
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 2,
                },
            }

            if (window.screen.width >= 767) {
                config.initialSlide = 1
                config.effect = 'creative'
                config.creativeEffect = {
                    prev: {
                        shadow: false,
                        translate: ['-61%', '-7.5%', -780],
                    },
                    next: {
                        shadow: false,
                        translate: ['61%', '-7.5%', -780],
                    },
                }
                if (slides.length === 2) {
                    config.initialSlide = 0
                }
            }

            if (window.screen.width >= 1279) {
                config.creativeEffect.prev.translate = ['-93%', '10%', 0]
                config.creativeEffect.next.translate = ['93%', '10%', 0]
            }

            const slider = new Swiper(sliderEl, config)
        })
    }
    initSliders()
    resizeWidth(initSliders)
}
