import 'swiper/css';
import './style.scss'
import Swiper from 'swiper';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { resizeWidth } from './resize.js'

const galleryAll = document.querySelectorAll('.js-gallery')

if (galleryAll.length) {
    function initSliders() {
        galleryAll.forEach((gallery) => {

            const sliderEl = gallery.querySelector('.js-gallery-swiper')

            if (sliderEl.swiper) {
                sliderEl.swiper.destroy()
            }

            const props = gallery.dataset.gallery || ''
            const isContent = props.includes('content')
            const isMin = props.includes('min')
            const isObserver = props.includes('observer')
            const slides = sliderEl.querySelectorAll('.swiper-slide')

            // if (isFancybox) {
            //     const fancyboxAll = gallery.querySelectorAll('[data-fancybox]')
            //     if (fancyboxAll.length) {
            //         fancyboxAll.forEach(fancyboxEl => {
            //             fancyboxEl.dataset.fancybox = 'gallery-' + index
            //         })
            //     }
            // }

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
                    nextEl: gallery.querySelector('.js-gallery__next-btn'),
                    prevEl: gallery.querySelector('.js-gallery__prev-btn'),
                },
                // pagination: {
                //     el: gallery.querySelector('.js-gallery-pagination'),
                //     type: 'fraction',
                //     currentClass: 'slider_navigation__pagination_current',
                //     //totalClass: 'slider_navigation__pagination_total',
                // },
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 2,
                },
                // on: {
                //     slideChange(swiper) {
                //         if (window.screen.width < 768) {
                //             if (swiper.realIndex === swiper.slides.length - 1) {
                //                 swiper.el.classList.add('this--end')
                //             }
                //             else {
                //                 swiper.el.classList.remove('this--end')
                //             }
                //         }
                //     },
                // },
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
                config.creativeEffect.prev.translate = ['-45%', '10%', 0]
                config.creativeEffect.next.translate = ['45%', '10%', 0]
            }

            // if (isContent) {
            //     if (window.screen.width >= 1279) {
            //         config.creativeEffect.prev.translate = ['-65.5%', '-3.5%', -530]
            //         config.creativeEffect.next.translate = ['65.5%', '-3.5%', -530]
            //     }
            // }

            // if (isObserver) {
            //     config.observeParents = true
            //     config.observer = true
            // }

            // if (isMin) {
            //     if (window.screen.width >= 767) {
            //         config.creativeEffect = {
            //             prev: {
            //                 shadow: false,
            //                 translate: ['-56%', '-7%', -780],
            //             },
            //             next: {
            //                 shadow: false,
            //                 translate: ['56%', '-7%', -780],
            //             },
            //         }
            //     }
            //     if (window.screen.width >= 1279) {
            //         config.creativeEffect.prev.translate = ['-62%', '-7.5%', -780]
            //         config.creativeEffect.next.translate = ['62%', '-7.5%', -780]
            //     }
            // }
            // if (props.includes('min-square')) {
            //     if (window.screen.width >= 767) {
            //         config.creativeEffect = {
            //             prev: {
            //                 shadow: false,
            //                 translate: ['-67%', '-7%', -430],
            //             },
            //             next: {
            //                 shadow: false,
            //                 translate: ['67%', '-7%', -430],
            //             },
            //         }
            //     }
            //     if (window.screen.width >= 1279) {
            //         config.creativeEffect.prev.translate = ['-87.5%', '-7.5%', -430]
            //         config.creativeEffect.next.translate = ['87.5%', '-7.5%', -430]
            //     }
            // }

            const slider = new Swiper(sliderEl, config)

            // if (isAppendBox) {
            //     const appendBoxList = []
            //     slider.slides.forEach(slideEl => {
            //         const appendBoxAll = slideEl.querySelectorAll('[data-append-box]')
            //         if (appendBoxAll.length) {
            //             appendBoxAll.forEach(appendBoxEl => {
            //                 const config = getAppendBox(appendBoxEl)
            //                 if (config) {
            //                     appendBoxList.push(config);
            //                 }
            //             })
            //         }
            //     })
            //     slider.on('slideChangeTransitionEnd', () => {
            //         appendBoxList.forEach(config => {
            //             config.hideTemplate()
            //         })
            //     })
            // }
        })
    }

    initSliders()
    resizeWidth(initSliders)
}
