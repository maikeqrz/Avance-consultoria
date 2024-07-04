const menu = document.querySelector('#navbar-icon');
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

window.addEventListener('resize', function() {
    setActiveTab();
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

//const homeText = document.querySelector('.texto')
sr.reveal('.text', {origin:'left'});
sr.reveal('.imgdela', {origin:'right'});