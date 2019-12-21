import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.container{
  width: 500px;
  margin: 0 auto ;
  justify-content: center;
  display: table-row;
}

.image img{
  position: relative;
	float: left;
	width: 300px;
	height: 300px;
	margin: 0 0 0 25px;
	padding: 0;
}
.player{
  justify-content: end;
}

/**
* VARIABLES
**/
/**
* VARIABLES
**/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans";
  font-size: 16px;
  background-color: #eee;
}

/**
* Title
**/
.title {
  text-align: center;
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  font-size: 45px;
  color: coral;
  text-transform: uppercase;
}

/**
* CARD
**/
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
          transform: translateX(-50%) translateY(-50%) translateZ(0);
  width: 370px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.5s;
}

.card:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/**
* THUMB
**/
.card__thumb {
  height: 245px;
  overflow: hidden;
  background-color: #000;
  transition: height 0.5s;
}
.card__thumb img {
  display: block;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
}
.card:hover .card__thumb {
  height: 130px;
}

.card:hover .card__thumb img {
  opacity: 0.6;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}

/**
* BODY
**/
.card__body {
  position: relative;
  height: 185px;
  padding: 20px;
  transition: height 0.5s;
}
.card:hover .card__body {
  height: 300px;
}


.card__title {
  margin: 0;
  padding: 0 0 10px 0;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.card__subtitle {
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 19px;
  color: coral;
}

.card__description {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 56px;
  margin: 0;
  padding: 0;
  color: #666c74;
  line-height: 27px;
  opacity: 0;
  -webkit-transform: translateY(45px);
          transform: translateY(45px);
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
  transition-delay: 0s;
}
.card:hover .card__description {
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  transition-delay: 0.2s;
}

.card__footer {
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #a3a9a2;
}


* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans";
  font-size: 16px;
  background-color: #eee;
}

/**
* Title
**/
.title {
  text-align: center;
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  font-size: 45px;
  color: coral;
  text-transform: uppercase;
}

/**
* CARD
**/
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
          transform: translateX(-50%) translateY(-50%) translateZ(0);
  width: 370px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.5s;
}
.card a {
  color: inherit;
  text-decoration: none;
}

.card:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}


/**
* THUMB
**/
.card__thumb {
  height: 245px;
  overflow: hidden;
  background-color: #000;
  transition: height 0.5s;
}
.card__thumb img {
  display: block;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
}
.card:hover .card__thumb {
  height: 130px;
}

.card:hover .card__thumb img {
  opacity: 0.6;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}

/**
* BODY
**/
.card__body {
  position: relative;
  height: 185px;
  padding: 20px;
  transition: height 0.5s;
}
.card:hover .card__body {
  height: 300px;
}

.card__category {
  position: absolute;
  top: -25px;
  left: 0;
  height: 25px;
  padding: 0 15px;
  background-color: coral;
  color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 25px;
}

.card__title {
  margin: 0;
  padding: 0 0 10px 0;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.card__subtitle {
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 19px;
  color: coral;
}

.card__description {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 56px;
  margin: 0;
  padding: 0;
  color: #666C74;
  line-height: 27px;
  opacity: 0;
  -webkit-transform: translateY(45px);
          transform: translateY(45px);
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
  transition-delay: 0s;
}
.card:hover .card__description {
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  transition-delay: 0.2s;
}

.card__footer {
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #A3A9A2;
}

`;
