const form = document.querySelector('form');

// On Form Submit (Calculate)
form.addEventListener('submit', ($event) => {
  $event.preventDefault(); // Don't send form values on server yet

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height == undefined || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight == undefined || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    const div = document.createElement('div');
    let category;
    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Overweight';
    }
    div.innerHTML = `<span>${category}</span>`;
    result.innerHTML = `<span>${bmi}</span>`;
    result.appendChild(div);
  }
});
