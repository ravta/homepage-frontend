document.addEventListener('DOMContentLoaded', function () {
    // функции для открытия-скрытия меню
    let slideUp = (target, duration) => {
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.boxSizing = 'border-box'
        target.style.height = target.offsetHeight + 'px'
        target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0
        window.setTimeout(() => {
            target.style.display = 'none'
            target.style.removeProperty('height')
            target.style.removeProperty('padding-top')
            target.style.removeProperty('padding-bottom')
            target.style.removeProperty('margin-top')
            target.style.removeProperty('margin-bottom')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    let slideDown = (target, duration) => {
        target.style.removeProperty('display')
        let display = window.getComputedStyle(target).display

        if (display === 'none')
            display = 'block'

        target.style.display = display
        let height = target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0
        target.offsetHeight
        target.style.boxSizing = 'border-box'
        target.style.transitionProperty = "height, margin, padding"
        target.style.transitionDuration = duration + 'ms'
        target.style.height = height + 'px'
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        window.setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    let slideToggle = (target, duration) => {
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration)
        } else {
            return slideUp(target, duration)
        }
    }

    // активируем главный слайдер
    if (document.querySelector('#main-slider')) {
        const mainSlider = new Glide('#main-slider', {
            type: 'carousel',
            perView: 1,
            autoplay: 6000,
            hoverpause: true,
            animationDuration: 500,
            animationTimingFunc: 'ease-in-out',
        })
        mainSlider.mount()
    }

    // активируем слайдер распродаж
    if (document.querySelector('#sale-slider')) {
        const saleSlider = new Glide('#sale-slider', {
            type: 'carousel',
            perView: 4,
            autoplay: 7000,
            hoverpause: true,
            animationDuration: 500,
            animationTimingFunc: 'ease-in-out',
            breakpoints: {
                1024: {
                    perView: 3
                },
                768: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        })
        saleSlider.mount()
    }

    // активируем слайдер уцененные товары
    if (document.querySelector('#discount-slider')) {
        const discountSlider = new Glide('#discount-slider', {
            type: 'carousel',
            perView: 4,
            autoplay: 9000,
            hoverpause: true,
            animationDuration: 500,
            animationTimingFunc: 'ease-in-out',
            breakpoints: {
                1024: {
                    perView: 3
                },
                768: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        })
        discountSlider.mount()
    }

    // активируем слайдер одного рубля
    if (document.querySelector('#ruble-slider')) {
        const rubleSlider = new Glide('#ruble-slider', {
            type: 'carousel',
            perView: 4,
            autoplay: 8000,
            hoverpause: true,
            animationDuration: 500,
            animationTimingFunc: 'ease-in-out',
            breakpoints: {
                1024: {
                    perView: 3
                },
                768: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        })
        rubleSlider.mount()
    }

    // активируем открытие-скрытие меню
    if (document.querySelectorAll('.main__collapse')) {
        const btns = document.querySelectorAll('.main__collapse')

        btns.forEach((el) => {
            el.addEventListener('click', function () {
                this.classList.toggle('main__collapse--active')
                const list = this.nextElementSibling
                slideToggle(list, 500)
            })
        })
    }
})