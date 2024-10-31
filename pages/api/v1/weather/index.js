

export default async function start(request, response) {
  const { cidade } = request.query;
  const br_q_es = 'br-df'
  const br_q = 'br'
  const apiKey = process.env.WEATHER_API_KEY;
  if (!cidade) {
    return response.status(400).json({ error: 'No city provided' });
  }
  try {
    const response1 = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${cidade},${br_q}&appid=${apiKey}
      `);
    const data = await response1.json();
    data.weather[0].main = translator(data.weather[0].main);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }

  function translator(text) {
    switch (text) {
      case 'Clouds':
        return 'Nublado';
      case 'Clear':
        return 'Céu limpo.';
      case 'Rain':
        return 'Chuva';
      case 'Snow':
        return 'Neve';
      case 'Drizzle':
        return 'Chuvisco';
      case 'Thunderstorm':
        return 'Trovoada';
      default:
        return text;
    }
  }
}