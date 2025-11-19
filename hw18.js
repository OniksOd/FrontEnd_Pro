function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return `${mins} : ${secs}`;
}
function countdown(seconds) {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(seconds);
  const intervalId = setInterval(() => {
    seconds--;
    timerElement.textContent = formatTime(seconds);
    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown(4);
