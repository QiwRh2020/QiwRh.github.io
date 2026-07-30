const typingElement = document.querySelector(".typing");

const words = [
    "Hello, I'm QiwRh.",
    "Welcome To My Website.",
    "Always Learning.",
    "Always Creating.",
    "Enjoy Your Stay."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typingEffect, deleting ? 35 : 70);

}

typingEffect();

const revealElements = document.querySelectorAll(".fade-in");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


const background = document.querySelector(".background");

background.innerHTML = "";

const STAR_COUNT = 80;

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement("span");

    const size = Math.random() * 2 + 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.opacity = Math.random();

    star.style.animationDuration = `${4 + Math.random() * 8}s`;

    star.style.animationDelay = `${Math.random() * 5}s`;

    background.appendChild(star);

}
const glow = document.querySelector(".ambient-glow");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

const cards = document.querySelectorAll(".link-card, .status-card, .interest-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });


});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});

const backToTop = document.getElementById("backToTop");
console.log(backToTop);
window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});