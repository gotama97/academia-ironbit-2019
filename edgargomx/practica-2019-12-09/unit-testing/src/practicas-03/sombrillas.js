module.exports = (weather) => {
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
      if (day.direction === "casa") {
            totalA = (totalA > 0) ? (totalA - 1) : 0; 
            totalB = totalB + 1;
      }else {
            totalB = (totalB > 0) ? (totalB - 1) : 0; 
            totalA = totalA + 1;
      }
        
    }
    
    return totalA + totalB;
  }
