const menu = document.querySelector('#navbar-icon');
const navlist = document.querySelector('.nav-list')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

const header = document.querySelector("header");
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var top = section.offsetTop - document.querySelector('header').offsetHeight;
        var bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            var sectionId = section.id;

            var activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            if (activeLink) {
                document.querySelectorAll('.nav-link').forEach(function(navLink) {
                    navLink.classList.remove('active');
                });
                activeLink.classList.add('active');
            }

            var activeTitle = document.querySelector('.title.active-title');
            if (activeTitle) {
                activeTitle.classList.remove('active-title');
            }

            var titleInCurrentSection = section.querySelector('.title');
            if (titleInCurrentSection) {
                titleInCurrentSection.classList.add('active-title');
            }
        }
    });
});



/* function setActiveTab() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var top = section.offsetTop - document.querySelector('header').offsetHeight;
        var bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            var sectionId = section.id;

            var activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            if (activeLink) {
                document.querySelectorAll('.nav-link').forEach(function(navLink) {
                    navLink.classList.remove('active');
                });
                activeLink.classList.add('active');
            }
        }
    });
} */

const sr = ScrollReveal({
    distance: '100px',
    duration: 2000,
    reset: true
});

/* ANIMATIONS HOME */
sr.reveal('.home-text', {origin:'left'});
sr.reveal('.home-img', {origin:'right'});

/* ANI. SEC2 */
sr.reveal('.about-content', {origin:'bottom', duration: 1000});

sr.reveal('.c1', {origin:'bottom', duration: 1000});
sr.reveal('.c2', {origin:'bottom', duration: 1500});
sr.reveal('.c3', {origin:'bottom', duration: 3000});

const carouselContainer = document.querySelector('.carousel-container');
const cardGroups = document.querySelectorAll('.card-group');
const prevButton = document.querySelector('.prev-button-left');
const nextButton = document.querySelector('.prev-button-right');

let currentGroup = 0;

function updateCarousel() {
  const translateX = -currentGroup * (cardGroups[0].offsetWidth + 20);
  carouselContainer.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener('click', () => {
  currentGroup--;
  if (currentGroup < 0) {
    currentGroup = cardGroups.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentGroup++;
  if (currentGroup >= cardGroups.length) {
    currentGroup = 0;
  }
  updateCarousel();
});

updateCarousel();

updateCarousel();