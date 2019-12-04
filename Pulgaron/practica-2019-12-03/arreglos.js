'use strict'

//retornas el booleano
const numbers = [1,2,3,4];
const divididos = numbers.filter(number => number === number%2);
console.log(divididos);

//retornas el nuevo elemento de la misma posicon de la lista
const persons = [{name: 'oscar', age: 23, rfc: 'abc'}];
const texts = persons.map(person => `My name is ${person.name} and i'm ${person.age} and my rfc is ${person.rfc}`);
console.log(texts);

//retornas el valor acumulado
const numeros = [5, 10, 15];
const total = numeros.reduce( (accumulator, currentValue) => {accumulator + currentValue}, 0);
console.log(total);

//retorna un booleano si existe al menos 1 es true
const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some( element => element === 'admin');
console.log(containsAdmin);

//retorna un booleano, es true si todos son 
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every( rating => rating >= 3 );

//retorna
const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');


    const minUmbrellas = (weather) => {
        let umbrella = 0;
        const pares = weather.filter((data, index) => {return ((data === 'rainy' || data === 'thunderstorms') && index%2 === 1)})
        const nones = weather.filter((data, index) => {return ((data === 'rainy' || data === 'thunderstorms') && index%2 !== 1)})
        //pares 0, 2 inpares 1, 3

        for(let i=0; i<= weather.length-1; i++){
            if(i === 0){
                if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                    umbrella++;
                    console.log(umbrella);
                }
            
            }
            
            if(i > 0 && i%2 === 0){

                if((weather[i-1] === 'rainy' || weather[i-1] === 'thunderstorms')){
                    if(weather[i-2] === 'rainy' || weather[i-2] === 'thunderstorms'){
                        umbrella++;
                    }
                    if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                        //umbrella++;
                        console.log(umbrella);
                    }
                    if(weather[i] !== 'rainy' || weather[i] !== 'thunderstorms'){
                        //umbrella++;
                        console.log(umbrella);
                    }
                }

                if((weather[i-1] === 'clear') || (weather[i-1] === 'sunny') || (weather[i-1] === 'cloudy') || (weather[i-1] === 'windy')){
                    if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                        umbrella++;
                        console.log(umbrella);
                    }
                }


                /* if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                    if(weather[i+1] !== 'rainy' || weather[i+1] !== 'thunderstorms'){
                        //umbrella++;
                        console.log(umbrella);
                    }
                    
                }
                else{
                    if(weather[i+1] !== 'rainy' || weather[i+1] !== 'thunderstorms'){
                        umbrella++;
                        console.log(umbrella);
                    }
                } */
            }

           /*  if(i > 0 && i%2 !== 1){
                if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                    if(weather[i-1] !== 'rainy' || weather[i-1] !== 'thunderstorms'){
                        umbrella++;
                        console.log(umbrella);
                    }
                }

                if(weather[i] === 'rainy' || weather[i] === 'thunderstorms'){
                    if((weather[i] !== 'rainy' || weather[i] !== 'thunderstorms')){
                        umbrella++;
                        console.log(umbrella);
                    }
                }
                    
            }
        
        } */
    }
       return umbrella;
    
}