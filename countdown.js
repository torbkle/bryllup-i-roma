// Nedtelling
const countdown = document.getElementById("countdown");
const targetDate = new Date("June 19, 2026 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "La festa er i gang!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `${days} dager – ${hours} timer – ${minutes} min – ${seconds} sek`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Åpne invitasjon og start musikk ved klikk på bildet
const breakSeal = document.getElementById("breakSeal"); // Dette er bildet
const sealedLetter = document.getElementById("sealedLetter");
const invitasjon = document.getElementById("invitasjon");
const bgMusic = document.getElementById("bgMusic");

breakSeal.addEventListener("click", () => {
  sealedLetter.style.display = "none";
  invitasjon.style.display = "flex";
  bgMusic.play();
});

// Mute-knapp
const muteBtn = document.getElementById("muteBtn");
muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});
