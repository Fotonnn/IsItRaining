import { useState, useEffect } from 'react';
import '../infra/WeatherFont.module.css';
import InputUi from '../infra/components/ui/InputUi/InputUi';

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);


  const fetchWeather = async (e, local_city) => {
    if (local_city.length <= 3) return;
    const response = await fetch(`/api/v1/weather?cidade=${local_city}`);
    if (!response.ok) {
      setWeatherData(null);
      return;
    }
    const wdata = await response.json();
    sessionStorage.setItem('weatherData', JSON.stringify(wdata));
    setWeatherData(wdata);
  }
  function isRaining(weatherData) {
    if (weatherData) {
      return weatherData.weather[0].main === 'Chuva';
    }
    return false;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>IsItRaining?</h1>
      <InputUi found={isRaining(weatherData)} placeholder="Cidade" fetchWeather={fetchWeather} />
      {weatherData &&
        <div style={styles.result}>
          <p>{weatherData.weather[0].main}</p>
        </div>}
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    color: '#fff',
    fontSize: '3rem',
    marginBottom: '50px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '200px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#8105FD',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    color: '#fff',
    fontSize: '1.5rem',
    marginTop: '20px',
  },
};