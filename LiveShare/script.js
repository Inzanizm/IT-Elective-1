let seksyon = document.querySelectorAll('section');
let navah = document.querySelectorAll('eneme ul li a');

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.querySelector('eneme ul li a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('aktib');
    }
});

window.onscroll = () => {
    seksyon.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navah.forEach(links => {
                links.classList.remove('aktib');
                document.querySelector('eneme ul li a[href=*' + id + ']').classList.add
                ('aktib');
            });
        };
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));