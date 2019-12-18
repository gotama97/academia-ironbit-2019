import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

paper-card {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px; }
  paper-card .card-content {
    width: 100%;
    display: flex;
    flex-direction: column; }
    paper-card .card-content iron-icon {
      padding-left: 16px; }
  paper-card vaadin-button {
    width: 158px; }
`;
