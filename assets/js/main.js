/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;
    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPortfolio = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const BLogo = document.getElementById('logoImg');


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    if(document.body.classList.contains(darkTheme)){
        BLogo.innerHTML = '<img src="/assets/img/BLogo.png" alt="Shehroz">';
    }else{
        BLogo.innerHTML = '<img src="/assets/img/Logo.png" alt="Shehroz">';
    }
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*==================== send mail ====================*/ 

function SendMail(){
    var params = {
        from_name : document.getElementById("full_name").value,
        email_id : document.getElementById("email_id").value,
        project : document.getElementById("project").value,
        message : document.getElementById("message").value,
    }
    if(email_id.value != '' && project.value != '' && message.value != ''){
        emailjs.send('service_8podzuo', 'template_g1870c8', params).then(function(res){
            alert("Thanks for Contacting!  " + res.status)
        });
    }else{
        alert("These fields are Required: Email, Project, Message");
    }
}


// let cvButton = document.getElementById('cvButton');
// function cvMsg(){
//     alert("Sorry! it's currently unavailable :( ");
// }
// cvButton.addEventListener('click', cvMsg);


/*==================== pre loader ====================*/ 

const body = document.getElementsByTagName("BODY")[0],
      preloaderImg = document.getElementById('preloader');

function preloader(){
    preloaderImg.style.display = 'none';
    console.log('preloader exit')
}

// body.addEventListener("load", preloader, true);



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
