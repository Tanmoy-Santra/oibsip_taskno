function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    
    if (unit === 'celsius') {
      document.getElementById('celsius-result').textContent = 'Celsius: ' + temperature + '°C';
      document.getElementById('fahrenheit-result').textContent = 'Fahrenheit: ' + ((temperature * 9/5) + 32) +'°F';
      document.getElementById('kelvin-result').textContent = 'Kelvin: ' + (temperature + 273.15) +'k';
    } else if (unit === 'fahrenheit') {
      document.getElementById('celsius-result').textContent = 'Celsius: ' + ((temperature - 32) * 5/9) +'°C';
      document.getElementById('fahrenheit-result').textContent = 'Fahrenheit: ' + temperature +'°F';
      document.getElementById('kelvin-result').textContent = 'Kelvin: ' + (((temperature - 32) * 5/9) + 273.15) +'K';
    } else if (unit === 'kelvin') {
      document.getElementById('celsius-result').textContent = 'Celsius: ' + (temperature - 273.15) +'°C';
      document.getElementById('fahrenheit-result').textContent = 'Fahrenheit: ' + (((temperature - 273.15) * 9/5) + 32) +'°F';
      document.getElementById('kelvin-result').textContent = 'Kelvin: ' + temperature +'K';
    }
  }
  function reload(){
    window.location.reload();
  }
  