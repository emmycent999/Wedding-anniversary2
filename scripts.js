// Music Toggle
const audio = document.getElementById('background-music');
const toggleButton = document.getElementById('music-toggle');
toggleButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = 'Mute Music';
  } else {
    audio.pause();
    toggleButton.textContent = 'Play Music';
  }
});