/* =========================================
   LOADER
========================================= */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");

let progress = 0;

const loaderInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 3;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loaderInterval);

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 400);
    }

    loaderProgress.style.width = `${progress}%`;

}, 80);


/* =========================================
   ENTER ARENA TRANSITION
========================================= */

const enterArena = document.getElementById("enterArena");
const navEnter = document.getElementById("navEnter");
const arenaTransition = document.getElementById("arenaTransition");

function enter() {

    arenaTransition.classList.add("active");

    setTimeout(() => {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

        setTimeout(() => {
            arenaTransition.classList.remove("active");
        }, 900);

    }, 800);
}


enterArena.addEventListener("click", enter);
navEnter.addEventListener("click", enter);


/* =========================================
   MOUSE PARALLAX
========================================= */

const hero = document.querySelector(".hero");
const arena = document.querySelector(".container");

hero.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;

    arena.style.transform = `
        scale(1.05)
        rotateY(${x * 2}deg)
        rotateX(${y * -2}deg)
    `;
});


hero.addEventListener("mouseleave", () => {

    arena.style.transform = `
        scale(1.05)
        rotateY(0deg)
        rotateX(0deg)
    `;

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .mode-card, .statement-content, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


/* =========================================
   MODE CARDS
========================================= */

const modeCards = document.querySelectorAll(".mode-card");

modeCards.forEach((card) => {

    const button = card.querySelector(".card-button");

    button.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;

        console.log(`Entering ${title} Arena`);

        alert(`${title} Arena — Coming soon`);

    });

});