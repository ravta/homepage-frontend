document.addEventListener('DOMContentLoaded', function () {
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
})