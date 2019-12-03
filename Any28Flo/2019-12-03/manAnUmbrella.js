let minUmbrella = function (array){
    let umbrellaInHome = 0;
    let umbrellaInWork = 0;
   
    let numberOfUmbrellas = array.map((element, index) =>{
        let totalUmbrellas;
         if(index%2 === 0 && element === "rainy"){

             totalUmbrellas+=1;
            //  if(umbrellaInHome >= 1){
            //      umbrellaInWork+=1;
            //  }else if(umbrellaInHome == 0){
            //     umbrellaInWork+=1;

            //  }
         }else if( index %2 != 0 && element === "rainy"){

            totalUmbrellas-=1;
        //      if(umbrellaInWork >=1){
        //          umbrellaInHome+=1;
        //      }else if(umbrellaInHome === 0){
        //         umbrellaInHome +=1;

        //      }
         }
         return totalUmbrellas;
     })
    //  console.log(numberOfUmbrellas);
    //  if(umbrellaInWork >= umbrellaInHome){
    //      return umbrellaInHome+umbrellaInWork
    //  }else if (umbrellaInWork < umbrellaInHome){
    //      return umbrellaInHome-umbrellaInWork
    //  }
    // return totalUmbrellas 
  
}

//Tests
let test_1 = minUmbrella(["rainy", "clear", "rainy", "cloudy"])
let test_2=minUmbrella(["sunny", "windy", "sunny", "clear"])
let test_3=minUmbrella(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
let test_4 = minUmbrella(["sunny","clear","sunny","sunny","clear","clear","sunny","rainy","clear","clear","windy","clear","clear","windy","sunny","clear","cloudy","clear","clear","sunny","sunny","rainy","thunderstorms","sunny","clear","windy","thunderstorms","windy","windy","clear","windy","clear","clear","clear","windy","clear","windy","sunny","windy","clear","windy","sunny","sunny","sunny","windy","sunny","sunny","sunny","windy","windy","sunny","sunny","rainy","thunderstorms","rainy","rainy","clear","windy","windy","thunderstorms","windy","clear","windy","clear","sunny","windy","cloudy","sunny","clear","clear","clear","sunny","cloudy","clear","windy","rainy","windy","clear","clear","sunny","sunny","sunny","sunny","cloudy","clear","clear","sunny","windy","windy","windy","thunderstorms","windy","windy","clear","thunderstorms","sunny","sunny","sunny","sunny","clear"])
// console.log(test_1);
// console.log(test_2);
// console.log(test_3);
console.log(test_4)
