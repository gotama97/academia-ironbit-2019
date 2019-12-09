// const options = ["clear", "sunny", "cloudy", "rainy", "windy", "thunderstorms"];

const weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"];

const weather2 = ["rainy", "sunny", "rainy"];

function minUmbrellas(weather) {
    let totalCasa = 0,
        totalOficina = 0;
    // Acumulador guardará el número de sombrillas.
    return weather.reduce((accumulator, currentWeather, index) => {
        if (currentWeather === 'rainy' || 'thunderstorms') {
            // IDA si el modulo 2 es cero.
            if (index % 2 === 0) {
                // Si no tiene sombrilla, añade una.
                if (totalCasa === 0) {
                    totalCasa+=1;
                    return accumulator + 1;
                }
                else {
                    return accumulator;
                }
            }
            }
            else {
                if (totalOficina === 0) {
                    totalOficina+=1;
                    return accumulator + 1;
                }
                else {
                    return accumulator;
                }
            }
            return accumulator
    }, 0);
}

console.log(minUmbrellas(weather2));