
//--------NAVIGATION BAR HIGHLIGHTS WHEN ACTIVE--------//

// Select all sections and menu links
let section = document.querySelectorAll(".section");
let menu = document.querySelectorAll("eneme a");

// Handle scroll event for section highlighting in the navigation menu
window.onscroll = () => {
    section.forEach((i) => {
        let top = window.scrollY; // Current vertical scroll position
        let offset = i.offsetTop - 150; // Section's offset position minus buffer for early activation
        let height = i.offsetHeight; // Height of the current section
        let id = i.getAttribute("id"); // Get the id of the current section

        // Check if the current scroll position is within this section
        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove("aktib"); // Remove 'aktib' class from all menu links
                document
                    .querySelector("eneme a[href*=" + id + "]") // Find the menu link corresponding to this section
                    .classList.add("aktib"); // Add 'aktib' class to the active menu link
            });
        }
    });
};

//  elements when they are visible in the viewport
function highlight() {
    var highlights = document.querySelectorAll(".highlight"); // Select all elements with the 'highlight' class

    for (var i = 0; i < highlights.length; i++) {
        var windowHeight = window.innerHeight; // Height of the browser's visible area
        var elementTop = highlights[i].getBoundingClientRect().top; // Distance of the element from the top of the viewport
        var elementVisible = 150; // Buffer before highlighting the element

        // Check if the element is within the visible part of the viewport
        if (elementTop < windowHeight - elementVisible) {
            highlights[i].classList.add("aktib"); // Add 'aktib' class to make the element visible
        } else {
            highlights[i].classList.remove("aktib"); // Remove 'aktib' class if the element is out of view
        }
    }
}

// Attach highlight function to the scroll event
window.addEventListener("scroll", highlight);

// Run highlight once on page load to highlight elements already in the viewport
highlight();





//--------------------------TOGGLE OFF CANVAS MENU--------------------------//

document.getElementById('menu-toggle').addEventListener('click', function () {
    const offcanvas = document.getElementById('offcanvas-menu'); // Get the offcanvas menu element
    const body = document.body; // Get the body element

    offcanvas.classList.toggle('open'); // Toggle 'open' class on the offcanvas menu
    body.classList.toggle('open'); // Optional: toggle 'open' class on the body for additional styling
});







//-------------REMOVE EXTRA HEIGHT AFTER LOGO ANIMATION-------------//
const center = document.querySelector('.center');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Current vertical scroll position

    if (scrollPosition >= 500) {
        center.classList.add('final'); // Add 'final' class when scrolled 500px or more
    } else {
        center.classList.remove('final'); // Remove 'final' class if scrolled less than 500px
    }
});

