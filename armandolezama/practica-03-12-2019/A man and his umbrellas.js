const minUmbrellas = (weather) => {
    let home = 0;
    let work = 0;
    let shouldUseUmbrella = false;
    
     return weather.reduce( (acc, currentValue, index) => {
      
      if(currentValue === "rainy" || currentValue === "thunderstorms"){
        shouldUseUmbrella = true;
      }
      
      if(index % 2 === 0 && shouldUseUmbrella){
        if(work > 0) {
        work -= 1; 
        home += 1;} else work += 1
      } else if(shouldUseUmbrella) {
        if(home > 0) {
        home -= 1;
        work += 1;} else home += 1;
      }

      shouldUseUmbrella = false;
      return home + work;
      }, 0)

  }
  