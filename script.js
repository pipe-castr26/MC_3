document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const message = document.querySelector(".fc-mc-container");
  const fc = document.getElementById("fc");
  const mc = document.getElementById("mc");
  const heart = document.getElementById("heart");

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      if (!card.classList.contains("flip")) {
        card.classList.add("flip");

        if (index === 5) {
          setTimeout(() => {
            message.classList.remove("hidden");
            animateFCMC();
          }, 500);
        }
      }
    });
  });

  function animateFCMC() {
    fc.style.transform = "translateX(-150px)";
    mc.style.transform = "translateX(150px)";

    setTimeout(() => {
      fc.classList.add("together");
      mc.classList.add("together");

      setTimeout(() => {
        heart.classList.remove("hidden");
        createFloatingHearts();
      }, 500);
    }, 1000);
  }

  function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
      const animatedHeart = document.createElement("div");
      animatedHeart.classList.add("animated-heart");
      animatedHeart.style.left = `${Math.random() * 100}%`;
      animatedHeart.style.top = `${Math.random() * 100}%`;
      animatedHeart.style.animationDuration = `${Math.random() * 2 + 1}s`;
      document.body.appendChild(animatedHeart);
    }
  }
});
