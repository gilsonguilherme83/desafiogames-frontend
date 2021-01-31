import React from 'react';

import {Container} from './styles';



const GameResult = ({onStart, onCancel, onDelete}) => (

    <Container>
        <div> Games - Ranking</div>
        <button onClick={()=>onStart(0)}>Iniciar</button>
        <button onClick={()=>onCancel()}>Parar</button>
        <p><button onClick={()=>onDelete()}>Zerar Contadores</button></p>
    </Container>
);

export default GameResult;