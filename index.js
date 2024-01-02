let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
let isRunning = false;
startButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
	if (!isRunning) {
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
		isRunning = true;
  }
  
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
  clearInterval(timerId); // останавливаем таймер
	isRunning = false;
});

function updateClock() {
  const clock = document.getElementById("clock");
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

	hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
