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

.battery:after{
  background-color: #fff;
  border: 2px solid #000;
  content: "";
  display: block;
  height: 16px;
  position: absolute;
  right: -6px;
  top: 6px;
  width: 6px;
}

.battery{
  background-color: #fff;
  border:2px solid #000;
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100px;
}

.battery .battery-level{
  background-color: #666666;
  height: 100%;
  text-align: center;
}

.container{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}
.change{
  justify-content: space-between;
  display: flex;
}`;
