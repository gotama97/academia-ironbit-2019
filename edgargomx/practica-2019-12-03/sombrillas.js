function minUmbrellas(weather) {
    // TODO
    let totalA = 0;
    let totalB = 0;
    
    const days = weather.map(
        (day, index) => { 
          const direction_man = (index%2 === 0) ? 'casa' : 'trabajo';
          return { 
                    with_umbrella: (day === 'rainy' || day === 'thunderstorms'), 
                    direction: direction_man
                 }; 
        });
                           
    const use_umbrella = days.filter(day => day.with_umbrella)
    for (let day of use_umbrella) { 
      if (day.direction === 'casa') {
            totalA = (totalA > 0) ? (totalA - 1) : 0; 
            totalB = totalB + 1;
      }else {
            totalB = (totalB > 0) ? (totalB - 1) : 0; 
            totalA = totalA + 1;
      }
        
    }
    
    return totalA + totalB;
  }

  const result = minUmbrellas(["sunny","clear","sunny","sunny","clear","clear","sunny","rainy","clear","clear","windy","clear","clear","windy","sunny","clear","cloudy","clear","clear","sunny","sunny","rainy","thunderstorms","sunny","clear","windy","thunderstorms","windy","windy","clear","windy","clear","clear","clear","windy","clear","windy","sunny","windy","clear","windy","sunny","sunny","sunny","windy","sunny","sunny","sunny","windy","windy","sunny","sunny","rainy","thunderstorms","rainy","rainy","clear","windy","windy","thunderstorms","windy","clear","windy","clear","sunny","windy","cloudy","sunny","clear","clear","clear","sunny","cloudy","clear","windy","rainy","windy","clear","clear","sunny","sunny","sunny","sunny","cloudy","clear","clear","sunny","windy","windy","windy","thunderstorms","windy","windy","clear","thunderstorms","sunny","sunny","sunny","sunny","clear"])

  const element = document.querySelector('#result')
  element.innerHTML = result

