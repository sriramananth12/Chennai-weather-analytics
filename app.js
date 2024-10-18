// Dummy data (replace with real API data or local data)
const rainfallData = [100, 200, 150, 180, 120, 250, 300];  // in mm
const temperatureData = [25, 27, 26, 28, 29, 30, 31];      // in °C
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// Rainfall Chart
const ctxRainfall = document.getElementById('rainfallChart').getContext('2d');
const rainfallChart = new Chart(ctxRainfall, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Rainfall (mm)',
      data: rainfallData,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Temperature Chart
const ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
const temperatureChart = new Chart(ctxTemperature, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: temperatureData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
