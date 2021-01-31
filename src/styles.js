import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`;

export const Content = styled.div`
width: 100%;
max-width: 400px;
margin: 30px;
background: #FFF;
border-radius: 4px;
padding:20px;

`;  


export const DivStyle = styled.div`
  font-size: 14px;
`;

export const UlStyle = styled.ul`
list-style-type:none;
`;

export const ThStyle = styled.th`
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
background-color: #4CAF50;
color: white;
`;

export const TableStyle = styled.table`
    text-align: center;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 100%;
    background: #FFF;
  `;

  export const TBodyStyle = styled.tbody`
    background: #FFF;
  `;

  export const PStyle = styled.p`
  background: #FFF;
  font-color: #000;
  padding: 5px;
  text-align:center;
`;