import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #7159c1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

button {
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
}

span{
    fonst-size:24px;
}
`;

