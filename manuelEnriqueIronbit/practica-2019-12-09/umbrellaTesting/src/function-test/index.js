function minUmbrellas(weather) {
    const daysWeatherBoolean = [];
    let totalUmbrellas = 0;
    let umbrellasHome = 0;
    let umbrellasOffice = 0;
    let home = true;
    //Converting rainy and thunderstorm to true and false
    weather.map(element => {
      if (element === "rainy" || element === "thunderstorms"){
        daysWeatherBoolean.push(1);
      }else{
        daysWeatherBoolean.push(0)
      }
    });
    
    for (let i in daysWeatherBoolean){
      if (daysWeatherBoolean[i] === 1  && home === true){
        if(umbrellasHome === 0){
          totalUmbrellas +=1;
          umbrellasOffice +=1;
          home = false;
        }else if(umbrellasHome > 0){
          umbrellasHome -= 1;
          umbrellasOffice +=1;
          home = false;
        }
      } else if (daysWeatherBoolean[i] === 1 && home === false){
        if(umbrellasOffice === 0){
          totalUmbrellas +=1;
          umbrellasHome +=1
          home = true;
        }else if(umbrellasOffice > 0){
          umbrellasOffice -= 1;
          umbrellasHome +=1;
          home = true;
        } 
      } else if (daysWeatherBoolean[i] === 0  && home === true){
        home = false;
      } else{
        home = true;
      }
    }
    return totalUmbrellas;
}



module.exports = minUmbrellas;