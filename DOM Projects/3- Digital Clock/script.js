const clock = document.querySelector('#clock');

const interval = setInterval(() => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  clock.innerHTML = currentTime;
}, 1000);