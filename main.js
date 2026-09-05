document.addEventListener("DOMContentLoaded", () => {

    updateProgress();

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});


function completeMission(number) {

    const missions =
        JSON.parse(localStorage.getItem("scienceMissions")) || {};

    missions[number] = true;

    localStorage.setItem(
        "scienceMissions",
        JSON.stringify(missions)
    );

    updateProgress();
}


function updateProgress() {

    const missions =
        JSON.parse(localStorage.getItem("scienceMissions")) || {};

    const completed =
        Object.values(missions).filter(Boolean).length;

    const progress =
        document.getElementById("missionProgress");

    if (progress) {
        progress.textContent = `${completed} / 6`;
    }
}


function createParticle(container, symbol = "✦") {

    if (!container) return;

    const particle = document.createElement("span");

    particle.className = "particle";
    particle.textContent = symbol;

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1200);
}


function burst(container, amount = 20) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createParticle(container);
        }, i * 25);

    }
}