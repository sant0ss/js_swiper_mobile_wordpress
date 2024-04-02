function setupSwiper(selector) {
    let swiperInstances = {};
 
    function initSwiper(container) {
        if (!container.classList.contains('swiper-container-initialized')) {
            container.classList.add('swiper-container');
            const wrapper = document.createElement('div');
            wrapper.classList.add('swiper-wrapper');
 
            const slides = Array.from(container.children);
            slides.forEach(slide => {
                slide.classList.add('swiper-slide');
                wrapper.appendChild(slide);
            });
 
            container.innerHTML = '';
            container.appendChild(wrapper);
 
            const pagination = document.createElement('div');
            pagination.classList.add('swiper-pagination');
            container.appendChild(pagination);
 
            swiperInstances[selector] = new Swiper(container, {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            container.classList.add('swiper-container-initialized');
        }
    }
 
    function destroySwiper(container) {
        if (swiperInstances[selector] && typeof swiperInstances[selector].destroy === 'function') {
            swiperInstances[selector].destroy(true, true);
            swiperInstances[selector] = null;
 
            container.classList.remove('swiper-container', 'swiper-container-initialized');
            const wrapper = container.querySelector('.swiper-wrapper');
            Array.from(wrapper.childNodes).forEach(slide => {
                slide.classList.remove('swiper-slide');
                container.appendChild(slide); 
            });
            wrapper.remove();
            container.querySelector('.swiper-pagination').remove();
        }
    }
 
    function onResize() {
        const container = document.querySelector(selector);
        if (!container) return;
 
        if (window.innerWidth <= 1024 && !container.classList.contains('swiper-container-initialized')) {
            initSwiper(container);
        } else if (window.innerWidth > 1024 && container.classList.contains('swiper-container-initialized')) {
            destroySwiper(container);
        }
    }
 
    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);
}
 
setupSwiper('your-class');