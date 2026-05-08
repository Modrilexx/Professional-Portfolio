const progressBar = document.getElementById("progressBar");
const revealElements = document.querySelectorAll(".reveal");

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    progressBar.style.width = "0%";
    return;
  }

  const progress = (scrollTop / scrollableHeight) * 100;
  progressBar.style.width = `${progress}%`;
}

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);

updateProgressBar();