// function minUmbrellas(weather) {
//     if('rainy' || 'thunderstorms'){ 
//             console.log(weather.indexOf('rainy'), weather.indexOf('thunderstorms'));
//         }
// }
    
//     minUmbrellas(['rainy', 'thunderstorms']);
    
/********************************************************************************/

// function alphabetPosition(text) {
//     console.log(text);
//         let arrayCap = [];
//         let arrayLow = [];
    
//         //MAPEANDO EL ARREGLO DE MAYUSCULAS
//         for(let i = 0;i<26;i++){
//             let letter = String.fromCharCode(i+65);
//             arrayCap[i]=letter;
//         }
    
//         //MAPEANDO EL ARREGLO DE MINUSCULAS
//         for(let i = 0;i<26;i++){
//             let letter = String.fromCharCode(i+97);
//             arrayLow[i]=letter;
//         }
    
//         //MAPEANDO EL ARREGLO DE MINUSCULAS
    
//         //DECONSTRUYENDO EL ARRAY EN CARACTERES
//         let phraseArray = Array.from(text);
//         //IGNORANDO LOS ESPACIOS DEL ARREGLO
//         let ignoreSpaces = phraseArray.filter(c=>c!=' ');
//         //CAMBIANDO LETRAS A NUMEROS
//         let res = ignoreSpaces.map((cur,idx)=>{
//             for(let i=0;i<26;i++){
//                 if(cur===arrayLow[i]||cur===arrayCap[i]){
//                     return (cur=(i+1))
//                 }
//             }
//         });
    
//         let res2 = res.filter(c=>c!=undefined).join(' ');
    
//         test=res2;
    
//         return test;
//       }
    


    
    
    
    

























