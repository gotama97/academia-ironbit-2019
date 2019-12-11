weather = ["cloudy","thunderstorms","sunny","rainy","sunny","sunny","thunderstorms","rainy","thunderstorms","windy"]

const minUmbrellas = (weather) => {
    let homeUmbrellas = 1;
    let workUmbrellas = 0;
    let flag = false;
    
     return weather.reduce( (acc, cur,idx) => {
      
      if(cur === "rainy" || cur === "thunderstorms"){
        flag = true;
      }else flag=false;
      
      
      if(idx % 2 ==0 && flag){
        if(homeUmbrellas != 0) {
        workUmbrellas += 1; 
        homeUmbrellas -= 1;} else if(flag){
            homeUmbrellas += 1;
        } 
      }
       else if(flag) {
            if(workUmbrellas!=0){
                homeUmbrellas +=1;
                workUmbrellas -=1;
            }else workUmbrellas +=1;
      }

      return homeUmbrellas + workUmbrellas; 
      }, 0)

  }

  console.log(minUmbrellas(weather));