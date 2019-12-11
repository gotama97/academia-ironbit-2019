
    const minUmbrellas = (weather) => {
        let umbrella = 0;
        const pares = weather.filter((data, index) => {return ((data === 'rainy' || data === 'thunderstorms') && index%2 === 1)})
        const nones = weather.filter((data, index) => {return ((data === 'rainy' || data === 'thunderstorms') && index%2 !== 1)})
        //pares 0, 2 inpares 1, 3

        for(let i=0; i<= weather.length-1; i++){
            if(i === 0){
                if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                    umbrella++;
                } 
            }       
            

            if(i%2 !== 0){
                if(weather[i-1] === 'rainy' || weather[i-1] === 'thunderstorms')
                {
                    if(i-1 !== 0){
                        if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                            
                        }
                        else{
                            
                        }
                    }
                }  
                else
                {
                    /* if( i-1 !== 0) */
                        if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                            umbrella++;
                            
                        }
                    
                }
            }
            
            if(i != 0 && i%2 === 0){

                
            }
        }
    return umbrella;
}


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

const weather =["rainy", "rainy", "rainy", "rainy"];
console.log(minUmbrellas(weather));
