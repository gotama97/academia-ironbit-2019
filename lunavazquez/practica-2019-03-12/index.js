function minUmbrellas(weather) {
  let umbrellas = 0;

  for (let i = 0; i < weather.length; i += 1) {
    const homeToWork = weather[i];
    const workToHome = weather[i + 1];
    if (homeToWork === 'rainy' || homeToWork === 'thunderstorms') {
      umbrellas += 1;
    }
    if (workToHome === 'rainy' || workToHome === 'thunderstorms') {
      umbrellas += 1;
    }
  }

  return umbrellas;
}

console.log(minUmbrellas(['rainy', 'cloudy', 'rainy', 'sunny', 'cloudy']));
