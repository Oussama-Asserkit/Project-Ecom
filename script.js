// Open menu And close
let menu = document.getElementById('menu');
let close = document.getElementById('close');
menu.addEventListener('click', () =>{
    let nav__bar__mobile = document.getElementById('nav__bar__mobile');
    nav__bar__mobile.style.display = 'block'
});
close.addEventListener('click', () =>{
    let nav__bar__mobile = document.getElementById('nav__bar__mobile');
    nav__bar__mobile.style.display = 'none'
});

// New Arrivals
let bottun_viewAll = document.getElementById('bottun_viewAll');
let bottun_hideAll = document.getElementById('bottun_hideAll');
const viewAll = document.getElementById('viewAll');
const viewAll1 = document.getElementById('viewAll1');
const viewAll2 = document.getElementById('viewAll2');
const viewAll3 = document.getElementById('viewAll3');
const viewAll4 = document.getElementById('viewAll4');
const viewAll5 = document.getElementById('viewAll5');
const viewAll6 = document.getElementById('viewAll6');
const viewAll7 = document.getElementById('viewAll7');
bottun_viewAll.addEventListener('click', () =>{
    viewAll.style.display = 'block';
    viewAll1.style.display = 'block';
    viewAll2.style.display = 'block';
    viewAll3.style.display = 'block';
    viewAll4.style.display = 'block';
    viewAll5.style.display = 'block';
    viewAll6.style.display = 'block';
    viewAll7.style.display = 'block';
    if (bottun_viewAll.click){
        bottun_viewAll.style.display = 'none';
        bottun_hideAll.style.display = 'block';
    };
});
bottun_hideAll.addEventListener('click', () => {
    viewAll.style.display = 'none';
    viewAll1.style.display = 'none';
    viewAll2.style.display = 'none';
    viewAll3.style.display = 'none';
    viewAll4.style.display = 'none';
    viewAll5.style.display = 'none';
    viewAll6.style.display = 'none';
    viewAll7.style.display = 'none';
    if (bottun_hideAll.click){
        bottun_hideAll.style.display = 'none'
        bottun_viewAll.style.display = 'block'
        document.getElementById('div__btn__viewAll').style.width = '100%'
        document.getElementById('div__btn__viewAll').style.textAlign = '-webkit-center';
    };
});
// Top Selling
let view_selling = document.getElementById('bottun_viewAll__selling');
let hide_selling = document.getElementById('bottun_hideAll__selling');
const viewAll_selling = document.getElementById('viewAll__selling');
const viewAll_selling_1 = document.getElementById('viewAll__selling_1');
const viewAll_selling_2 = document.getElementById('viewAll__selling_2');
const viewAll_selling_3 = document.getElementById('viewAll__selling_3');
const viewAll_selling_4 = document.getElementById('viewAll__selling_4');
const viewAll_selling_5 = document.getElementById('viewAll__selling_5');
const viewAll_selling_6 = document.getElementById('viewAll__selling_6');
const viewAll_selling_7 = document.getElementById('viewAll__selling_7');
view_selling.addEventListener('click', () => {
    viewAll_selling.style.display = 'block';
    viewAll_selling_1.style.display = 'block';
    viewAll_selling_2.style.display = 'block';
    viewAll_selling_3.style.display = 'block';
    viewAll_selling_4.style.display = 'block';
    viewAll_selling_5.style.display = 'block';
    viewAll_selling_6.style.display = 'block';
    viewAll_selling_7.style.display = 'block';
    if (view_selling.click){
        view_selling.style.display = 'none';
        hide_selling.style.display = 'block';
    };
});
hide_selling.addEventListener('click', () => {
    viewAll_selling.style.display = 'none';
    viewAll_selling_1.style.display = 'none';
    viewAll_selling_2.style.display = 'none';
    viewAll_selling_3.style.display = 'none';
    viewAll_selling_4.style.display = 'none';
    viewAll_selling_5.style.display = 'none';
    viewAll_selling_6.style.display = 'none';
    viewAll_selling_7.style.display = 'none';
    if (hide_selling.click){
        hide_selling.style.display = 'none'
        view_selling.style.display = 'block'
        document.getElementById('div__btn__viewAll__selling').style.width = '100%'
        document.getElementById('div__btn__viewAll__selling').style.textAlign = '-webkit-center';
    };
});

// OUR HAPPY CUSTOMERS
const swiper = new Swiper('.slider__swipper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        320:{
            slidesPerView : 1
        },
        620: {
            slidesPerView : 2
        },
        1024: {
            slidesPerView : 3
        }
    },
});
