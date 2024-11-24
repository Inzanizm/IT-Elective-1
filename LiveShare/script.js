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