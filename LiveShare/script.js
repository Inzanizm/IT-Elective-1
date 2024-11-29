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

document.getElementById('menu-toggle').addEventListener('click', function() {
    const offcanvas = document.getElementById('offcanvas-menu');
    const body = document.body;
    
    offcanvas.classList.toggle('open');
    body.classList.toggle('open'); // Optional: this can help manage other content when menu is open
});