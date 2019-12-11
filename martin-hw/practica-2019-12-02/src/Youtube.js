import React from 'react';
import './App.css';
import LogIn from './LogIn';

class Youtube extends React.Component{
    render(){
        return(
            <div class="youtube">
                <div class="leftPart">
                    <h1 class="youTitleOne">DISFRUTA TU TV.</h1>
                    <h2 class="youTitleTwo">Puedes ver en smart TV, PlayStation, Xbox, <br />Chromecast, Apple TV, reproductores de <br />Blu-ray y más.</h2>
                    <a href="#"><p class="youButton">OBTEN INFORMACION</p></a>
                </div>
                <div class="rightPart">
                    <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Youtube;