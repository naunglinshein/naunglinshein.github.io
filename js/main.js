const rotator = document.querySelector("[data-rotator]");

if (rotator) {
  const phrases = [
    "ERP platforms",
    "full-stack delivery",
    "learning systems",
    "business automation",
  ];

  let index = 0;

  window.setInterval(() => {
    rotator.classList.add("is-changing");

    window.setTimeout(() => {
      index = (index + 1) % phrases.length;
      rotator.textContent = phrases[index];
      rotator.classList.remove("is-changing");
    }, 180);
  }, 2600);
}
