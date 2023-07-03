const apiKey = "FoHJlrfpuYdCBfsDk7lYfA97a8NBVCID";
let hour = new Date().getHours();
let state;

const cityId = async () => {
  const city = document.getElementById('city').value || 'Brasília';
  if (city === '') {
    alert('Você deve informar uma cidade!');
  } else {
    try {
      const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=pt-br`);
      const data = await response.json();
      const id = data[0].Key;
      state = data[0].AdministrativeArea.ID;
      return getWeather(id);
    } catch (error) {
      alert(`Erro ao tentar procurar a cidade ${city}.`);
    }
  }
};

const getWeather = async (id) => {
  try {
    const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${id}?apikey=${apiKey}&language=pt-br&metric=true`);
    const data = await response.json();
    const info = {
      temp: {
        minimum: data.DailyForecasts[0].Temperature.Minimum.Value,
        maximum: data.DailyForecasts[0].Temperature.Maximum.Value,
      },
      rain: data.DailyForecasts[0].Day.HasPrecipitation,
      extraInfo: {
        day: data.DailyForecasts[0].Day.IconPhrase,
        night: data.DailyForecasts[0].Night.IconPhrase,
      },
    };
    console.log(data);
    return commandWeather(info);
  } catch (error) {
    console.warn('Não foi possível obter o clima!', error);
  }
};

const commandWeather = (obj) => {
  const city = document.getElementById('city').value || 'Brasília';
  const cityName = document.getElementById('cityName');
  const maximum = document.getElementById('max');
  const minimum = document.getElementById('min');
  const info = document.getElementById('info');

  cityName.innerHTML = city + '/' + state;
  minimum.innerHTML = `${Math.floor(Number(obj.temp.minimum))}<sup>°`;
  maximum.innerHTML = `${Math.floor(Number(obj.temp.maximum))}<sup>°`;

  if (hour >= 6 || hour < 18) {
    info.innerHTML = `<em>${obj.extraInfo.day}</em>`;
  } else {
    info.innerHTML = `<em>${obj.extraInfo.night}</em>`;
  }
};
