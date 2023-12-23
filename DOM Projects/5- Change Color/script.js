const randomColor = function () {
    const randomHex = '1234567890ABCDEFG';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * 16);
      color += randomHex[idx];
    }
  
    document.body.style.backgroundColor = color;
  };
  
  let interval;
  
  const startChangingColor = function () {
    if (!interval) {
      interval = setInterval(randomColor, 1000);
    }
  
    console.log(interval);
  };
  
  const stopChangingColor = function () {
    clearInterval(interval);
    document.body.style.backgroundColor = '#212121';
    interval = null; // For Cleanup
  };
  
  document.getElementById('start').addEventListener('click', startChangingColor);
  
  document.getElementById('stop').addEventListener('click', stopChangingColor);
  