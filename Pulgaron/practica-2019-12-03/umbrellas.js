
const minUmbrellas = weather => {
    let home = 0;
    let work = 0;
    let UseUmbrella = false;
    
    return weather.reduce( (acc, currentValue, index) => {
      
        if(currentValue === "rainy" || currentValue === "thunderstorms"){
            UseUmbrella = true;
        }
      
        if(index % 2 === 0 && UseUmbrella){
            if(work > 0) {
                work = work - 1; 
                home = home + 1;
            }
            else {
                work = work + 1;
            }
        } 
        else if(UseUmbrella) {
            if(home > 0) {
                home = home - 1;
                work = work +  1;
            } 
            else home = home + 1;
        }

    UseUmbrella = false;
    return home + work;
    }, 0)

  }

