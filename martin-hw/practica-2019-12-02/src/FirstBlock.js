import React from 'react';
import './App.css'



class FirstBlock extends React.Component{
    render(){
        return(
            <div class="first">
                <h1 class="titleOne">Programas y películas sin <br /> límite y mucho más.</h1>
                <h2 class="titleTwo">Disfruta donde quieras. Cancela en cualquier <br />momento.</h2>
                <div class="buttons">
                    <a href="#"><p class="bOne">OBTEN INFORMACION</p></a>
                    <a href="#"><p class="bTwo">PROBAR AHORA</p></a>
                </div>
            </div>
        )
    }
}

export default FirstBlock;