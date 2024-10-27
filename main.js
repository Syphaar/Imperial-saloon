// NAV-BAR
let openLink = document.querySelector("#open-lnk");
const closeLink = document.querySelector("#close-lnk");

// TOGGLE BUTTONS TO DISPLAY AND CLOSE NAVBAR-LINKS
openLink.onclick = function() {
    const navbar = document.querySelector("#pages");
    navbar.classList.toggle("active");
    openLink.classList.add("closeIcon");
    closeLink.classList.add("openIcon");
};

closeLink.onclick = function() {
    const navbar = document.querySelector("#pages");
    navbar.classList.toggle("active");
    openLink.classList.remove("closeIcon");
    closeLink.classList.remove("openIcon");
};

// ACTIVE LINKS
const navLinks = document.querySelector('.nav_links');
// const windowPathname = window.location.pathname;

// navLinks.forEach(navLinks => {
//     if (navLinks.href.includes(windowPathname)) {
//         navLinks.classList.add("active");
//     }
// })

// navLinks.onclick = function() {
//     navLinks.classList.remove("pages_links");
//     navLinks.style.display = "none";
// }

const pageLinks = document.getElementsByClassName("pages_links");

navLinks.addEventListener("click", function() {
    navLinks.classList.remove("pages_links");
});

// navLinks.onclick = function() {
//     navLinks.classList.remove("pages_links");
// }


// CAROUSEL
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-image");
const nextBtn = document.querySelector(".next-image");

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
});

function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }

    if (counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide) {
        slide.style.transform = `translate(-${counter * 100}%)`;
    });
};


prevBtn.style.display = "none";