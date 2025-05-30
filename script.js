const container = document.getElementById('text-container');

const phrases = [
  "Làm Ny Anh Nhé 🤍",
  "I Love You Forever",
  "You mean so much to me.",
  "You’re everything to me.",
  "Maybe you are not the special girl in the crowd. But you are the special girl in my heart!"
];

function createLine() {
  const line = document.createElement('div');
  line.classList.add('text-line');
  line.style.top = Math.random() * window.innerHeight + 'px';
  line.style.animationDuration = (10 + Math.random() * 10) + 's';
  line.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  container.appendChild(line);
  setTimeout(() => container.removeChild(line), 20000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heart.innerHTML = '❤️';
  container.appendChild(heart);
  setTimeout(() => container.removeChild(heart), 5000);
}

setInterval(createLine, 400);
setInterval(createHeart, 1000);
