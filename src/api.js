import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

export function getWeatherData(units, coords) {
  const deferred = Promise.defer();
  const parsedUnits = units === 'F' ? 'imperial' : 'metric';

  superagent.get('api.openweathermap.org/data/2.5/weather')
    .query({
      units: parsedUnits,
      lat: coords.lat,
      lon: coords.lon,
      appid: '#'
    })
}
export function getLocationCoords() {
  const deferred = Promise.defer();

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        deferred.resolve({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        });
      },
      (error) => {
        deferred.reject(error);
      }
    );
  } else {
    superagent.get('https://ipinfo.io/json')
      .use(jsonp)
      .end((error, locationData) => {
        if (error) {
          deferred.reject(error);
        } else {
          deferred.resolve(locationData);
        }
      });
  }
  return deferred.promise;
}
