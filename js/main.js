document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.main__collapse')

    // активируем слайдер
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

    // скрываемое меню
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

    btns.forEach((el) => {
        el.addEventListener('click', function() {
            this.classList.toggle('main__collapse--active')
            const list = this.nextElementSibling
            slideToggle(list, 200)
        })
    })
})