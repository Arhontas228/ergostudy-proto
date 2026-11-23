// Простой таймер
let timeLeft = 45 * 60; // 45 минут в секундах
let timerInterval;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.querySelector('.time').textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert('Пора сделать перерыв!');
    }
  }, 1000);
}

// Подключение камеры (WebRTC)
async function connectCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElement = document.querySelector('.camera-preview video');
    if (videoElement) {
      videoElement.srcObject = stream;
    }
  } catch (err) {
    console.error('Ошибка доступа к камере:', err);
    alert('Не удалось получить доступ к камере. Проверьте разрешения браузера.');
  }
}